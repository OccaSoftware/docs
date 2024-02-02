# Lightning Bolt Strategy Documentation

## Introduction

The `LightningBoltStrategy` class provides a blueprint for creating custom strategies to generate lightning bolts.

It lays the groundwork for defining various lightning behaviors and allows you to implement their own unique lightning effects.

Altos includes two strategies by default: Simple Bolt and Radial Bolt. If you're stuck or not sure where to start, I recommend reviewing these.

## Usage

1. Create a new Prefab.
2. Add a component that inherits from `LightningBoltStrategy`.
3. Add this Prefab to the `LightningBoltController` strategies list.

### Inheriting from `LightningBoltStrategy`

To create a custom lightning bolt strategy, follow these steps:

1. **Inherit from `LightningBoltStrategy`:**

   ```csharp
   public class CustomLightningBolt : LightningBoltStrategy
   {
       // Implement abstract methods here
   }
   ```

2. **Implement the `GenerateLightning` method:**

   ```csharp
   public override void GenerateLightning()
   {
       // Define the logic to generate your custom lightning
   }
   ```

3. **Usage with `LightningBoltController`:**
   - Create a Prefab that uses your custom strategy.
   - Add the Prefab to the `LightningBoltController` to include it in the lightning generation process.

### Abstract Methods

#### `GenerateLightning()`

```csharp
public abstract void GenerateLightning();
```

- **Description:** This abstract method must be implemented in your derived class. It defines the logic for generating the lightning effect.

### Example Implementation

Here's a simple example implementation of a custom lightning bolt strategy:

```csharp
using UnityEngine;

namespace OccaSoftware.Altos.Runtime
{
    public class CustomLightningBolt : LightningBoltStrategy
    {
        public override void GenerateLightning()
        {
            // Implement your custom lightning generation logic here
            Debug.Log("Custom Lightning Bolt Generated!");
        }
    }
}
```

This example demonstrates a basic implementation of a custom lightning bolt strategy. You can extend this class to include additional properties and methods to tailor the lightning effect to your specific requirements.

### Complex Implementation

Here's a complex example implementation of a custom lightning bolt strategy:

```csharp
using UnityEngine;
using UnityEngine.VFX;

namespace OccaSoftware.Altos.Runtime
{
  [ExecuteAlways]
  [RequireComponent(typeof(Light))]
  [RequireComponent(typeof(VisualEffect))]
  [AddComponentMenu("OccaSoftware/Altos/Lightning/Simple Bolt")]
  public class SimpleBolt : LightningBoltStrategy
  {
    class LightningData
    {
      public bool success;
      public Data data;

      public class Data : LightningData
      {
        public Vector3 position;
      }
    }

    public override void GenerateLightning()
    {
      LightningData response = SpawnLightning();

      if (response.success)
      {
        Instantiate(gameObject, response.data.position, Quaternion.identity);
      }
    }

    /// <summary>
    /// The world space position of the lightning
    /// </summary>
    public Vector3 Root => transform.position;

    /// <summary>
    /// The world space target of the lightning
    /// </summary>
    [HideInInspector]
    public Vector3 target;

    [Header("Lifecycle")]
    /// <summary>
    /// Set whether the effect is alive or not
    /// </summary>
    public bool alive;

    /// <summary>
    /// The age of this lightning
    /// </summary>
    public float age;

    /// <summary>
    /// The maximum duration of the lightning (in seconds)
    /// </summary>
    public float maxLifetime = 2;

    /// <summary>
    /// The variation in the lightning lifetime
    /// </summary>
    [Range(0, 1)]
    public float lifetimeRandomness = 0.5f;

    /// <summary>
    /// The duration of the lightning (in seconds)
    /// </summary>
    [HideInInspector]
    public float lifetime;

    [Header("Visual Effect")]
    public VisualEffect visualEffect;

    [Header("Lighting")]
    public Light _light;
    public float maxIntensity = 1000000f;
    public float lightFlickerFrequency = 2f;
    public float lightFlickerIntensity = 0.5f;

    private void Reset()
    {
      FetchComponents();
    }

    private void FetchComponents()
    {
      if (_light == null)
      {
        _light = GetComponent<Light>();
      }

      if (visualEffect == null)
      {
        visualEffect = GetComponent<VisualEffect>();
      }
    }

    public float precipitationThreshold = 0.5f;
    private float precipitationIntensity;

    public float maxSpawnExtents = 5000f;

    private LightningData SpawnLightning()
    {
      FetchComponents();

      // Set position
      float x = Random.Range(-maxSpawnExtents, maxSpawnExtents);
      float y = Random.Range(
        AltosSkyDirector.Instance.cloudDefinition.GetCloudFloor(),
        AltosSkyDirector.Instance.cloudDefinition.GetCloudCenter()
      );
      float z = Random.Range(-maxSpawnExtents, maxSpawnExtents);

      Vector3 position = new Vector3(x, y, z);

      // Check if valid
      WeatherMap weatherMap = FindObjectOfType<WeatherMap>();
      precipitationIntensity = weatherMap.GetIntensity(position);

      if (precipitationIntensity < precipitationThreshold)
      {
        return new LightningData() { success = false, data = null };
      }

      return new LightningData()
      {
        success = true,
        data = new LightningData.Data() { position = position }
      };
    }

    private void OnEnable()
    {
      LightningEventDispatcher.DispatchBoltEvent(
        new BoltEvent() { bolt = this, position = transform.position }
      );

      gameObject.name = Random.Range(0, 1000).ToString();

      if (LightningBoltController.instance != null)
      {
        gameObject.transform.SetParent(LightningBoltController.instance.transform);
      }

      // Setup init props
      lifetime = Random.Range(maxLifetime * (1.0f - lifetimeRandomness), maxLifetime);
      age = 0;

      Vector3 pos;
      LightningAttractorStrategy attractorStrategy =
        LightningAttractorController.GetHighestPriorityAttractor(this);

      if (attractorStrategy)
      {
        pos = attractorStrategy.GetTarget();
      }
      else
      {
        Vector2 xz = Random.insideUnitCircle * 100f;
        pos = new Vector3(transform.position.x + xz.x, 0, transform.position.z + xz.y);
      }

      visualEffect.SetFloat("altos_LightningLifetime", lifetime);
      visualEffect.SetVector3("altos_LightningTargetPositionWS", pos);
      _light.enabled = true;
      alive = true;
    }

    private void Update()
    {
      if (!alive)
        return;

      float pos = transform.position.x + age * lightFlickerFrequency;
      float r = Mathf.PerlinNoise1D(pos);
      r = Mathf.Lerp(1, r, lightFlickerIntensity);
      _light.intensity = maxIntensity * r;

      age += Time.deltaTime;

      if (age > lifetime)
      {
        Dispose();
      }
    }

    void Dispose()
    {
      age = 0;
      alive = false;
      visualEffect.Stop();

      if (Application.isPlaying)
      {
        Destroy(gameObject);
      }
      else
      {
        DestroyImmediate(gameObject);
      }
    }
  }
}

```

By creating custom strategies that inherit from `LightningBoltStrategy`, you have the flexibility to design a wide range of lightning effects for your Unity projects.
