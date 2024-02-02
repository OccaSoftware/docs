# Lightning Attractor Strategy Documentation

## Introduction

The `LightningAttractorStrategy` class offers a framework to create custom strategies for attracting lightning bolts.

As an abstract class, it defines the essential methods necessary for determining the target position, calculating priority, and responding to lightning strikes.

## Usage

### Inheriting from `LightningAttractorStrategy`

To create a custom lightning attractor strategy, follow these steps:

1. **Inherit from `LightningAttractorStrategy`:**

   ```csharp
   public class CustomAttractor : LightningAttractorStrategy
   {
       // Implement abstract methods here
   }
   ```

2. **Implement the abstract methods:**
   - `GetTarget()`: Returns the position in the world space that the lightning bolt should target.
   - `GetPriority(LightningBoltStrategy bolt)`: Returns the priority of the attractor for a given lightning bolt.
   - `Strike(BoltEvent bolt)`: Defines the response to a lightning strike event.

3. **Usage in LightningAttractorController:**
   - Instantiate your custom attractor strategy.
   - Add it to the `LightningAttractorController` to include it in the attractor management process.

### Abstract Methods

#### `GetTarget()`

```csharp
public abstract Vector3 GetTarget();
```

- **Description:** This abstract method must be implemented in your derived class. It defines the position in world space that the lightning bolt should target.

#### `GetPriority(LightningBoltStrategy bolt)`

```csharp
public abstract float GetPriority(LightningBoltStrategy bolt);
```

- **Description:** This abstract method must be implemented in your derived class. It calculates and returns the priority of the attractor for a given lightning bolt.

#### `Strike(BoltEvent bolt)`

```csharp
public abstract void Strike(BoltEvent bolt);
```

- **Description:** This abstract method must be implemented in your derived class. It defines the response to a lightning strike event. This could include visual effects, sound, or any other desired behavior.

### Example Implementation

Here's a basic example implementation of a custom lightning attractor strategy:

```csharp
using UnityEngine;

public class CustomAttractor : LightningAttractorStrategy
{
    public override Vector3 GetTarget()
    {
        // Implement logic to determine the target position
        return transform.position;
    }

    public override float GetPriority(LightningBoltStrategy bolt)
    {
        // Implement logic to calculate priority based on the lightning bolt
        return Random.Range(0f, 1f);
    }

    public override void Strike(BoltEvent boltEvent)
    {
        // Implement logic for the attractor's response to a lightning strike
        Debug.Log($"{gameObject.name} was struck by {boltEvent.bolt.name}");
    }
}
```

This example demonstrates a custom attractor strategy with basic target determination, priority calculation, and a response to a lightning strike event. Extend this class to include additional properties and methods to create attractors with diverse behaviors.
