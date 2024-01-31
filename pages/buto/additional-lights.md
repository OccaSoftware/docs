
# Additional Lights

## Using Additional Lights

Buto supports Additional Lights. Buto does not support Additional Light Shadows.

To make a light affect the volumetric fog, add the `ButoLight` component to it.

## Customize Additional Lights

You can customize the light properties that Buto will use to light your volumetric fog.

The `Buto Light` component automatically inherits the properties of the `Light` component. For most cases, this works well - Buto will light your volumetric fog using the same light settings that Unity will use to light your environment.

In some cases, you may want to override the light properties that Buto will use for your volumetric fog. For example, you might want to increase the intensity of the volumetric lighting. Buto supports this use case.

To customize these Light properties for just the Volumetric Lighting, follow these steps:

1. Disable the **Inherit** toggle option in the **Buto Light** component.

## Increase the Additional Light Limit

Buto has a default limit of 8 additional lights.

To increase this limit, you need to edit two files included with Buto.

⚠️ **Warning**:

- When you increase the maximum light limit, Buto will be more expensive. Do not set it to an arbitrarily high number.

### Updating the CPU-side Maximum Light Count

1. Open `Packages/Buto/Runtime/ButoCommon.cs`.
2. Look for the line: `internal static readonly int _MAXLIGHTCOUNT = 8`.
3. Set the new maximum light count to the value you want.

### Updating the GPU-side Maximum Light Count

1. Open `Packages/Buto/Shaders/Resources/LightingSampler.compute`.
2. Look for the line `#define MAX_LIGHT_COUNT 8`.
3. Update the number to the same value as the value you've set in `ButoCommon.cs`.
4. Save both files and validate that the increased light count is working.

### Restart your Editor

After you make these changes, restart your Unity Editor.

Unity requires that you restart the Unity Editor after increasing the size of a statically-typed array.
