
# Additional Lights

## Using Additional Lights
Buto requires you to identify the specific lights that should be included in the volumetric lighting system.

To include an Additional Light, add a ButoLight script to that Light.

## Customizing Additional Lights
Buto automatically inherits the properties of the Light component.

To customize these Light properties for just the Volumetric Lighting, uncheck the "Inherit" option in the Buto Light component.

## Increasing the Additional Light Limit
Buto has a default limit of 8 additional lights.

To increase this limit, you need to edit a few of the files included with Buto.

Increasing the maximum light limit could cause increased performance requirements, so we recommend raising it to match your required number of lights. Do not set it to an arbitrarily high number.

### Updating the CPU-side Maximum Light Count
1. Open ~/Runtime/ButoCommon.cs.
2. Look for the line: `internal static readonly int _MAXLIGHTCOUNT = 8`
3. Set the new maximum light count to the value you want.

### Updating the GPU-side Maximum Light Count
1. Open ~/Shaders/Resources/LightingSampler.compute
2. Look for the line `#define MAX_LIGHT_COUNT 8`. Update the number to the same value as the value you've set in ButoCommon.cs
3. Save both files and validate that the increased light count is working.

### Restart your Editor
Unity requires that you restart the Unity Editor after increasing the size of a statically-typed array. After you make these changes, restart your Unity Editor.