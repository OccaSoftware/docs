
# Volume Framework Integration
The Universal Render Pipeline uses a Volume framework, which contains Scene setting properties that URP interpolates between depending on the position of the camera.


## Using the API
Buto is fully integrated to the Volume framework so all of the Volume component properties are overridable via the standard Volume component System API.

1. Get a reference to the Volume
1. Set the `overrideState` to true.
1. Set the value of the desired parameter. 


## Examples
For an example, reference the included `AnimateButoSetting.cs` script.
```cs
public class AnimateButoSetting : MonoBehaviour
{
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.F))
        {
            Volume[] volumes = FindObjectsOfType<Volume>();
            foreach (Volume volume in volumes)
            {
                if (volume.profile != null && volume.profile.TryGet(out ButoVolumetricFog volumetricFog))
                {
                    volumetricFog.baseHeight.overrideState = true;
                    volumetricFog.baseHeight.value = volumetricFog.baseHeight.value + 1;
                    Debug.Log(volumetricFog.baseHeight.value);
                }
            }
        }
    }
}
```

