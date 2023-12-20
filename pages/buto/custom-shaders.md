
# Using Buto with Custom Shaders

## Overview
Buto automatically works with any shader that writes to the depth buffer.

Some shaders don't write to the depth buffer (e.g., Transparent objects). You need to take some additional steps in order to make these shaders use Buto fog.

## Adding Buto Fog Support to a Shader
### 1. Including the Buto utility methods
Before you can use Buto's fog sampler, you need to include the utility methods.

Add the following include statement at the top of your shader file:

```hlsl
#include "Packages/com.occasoftware.buto/Shaders/Resources/Buto.hlsl"
``` 

### 2. Calling the Buto fog method
In your Fragment method, you need to use Buto's utility method to get the fog data for that screen position. We offer two methods. We recommend using ButoFogBlend.

```hlsl
// Method 1 (Recommended)
float3 ButoFogBlend(float2 ScreenPosition, float Distance, float3 InputColor)
```

Example implementation:
```hlsl
float2 screenPosition = ComputeNormalizedDeviceCoordinatesWithZ(input.positionWS, UNITY_MATRIX_VP).xy;
float viewDistance = -TransformWorldToView(input.positionWS).z;
color.rgb = ButoFogBlend(screenPosition, viewDistance, color.rgb);
```

```hlsl
// Method 2 (Advanced)
float4 ButoFog(float2 ScreenPosition, float Distance)
```

## Data and usage

### ButoFogBlend

ButoFogBlend interpolates your fragment input color based on the Fog Data. It is a wrapper around the ButoFog method. This works like Unity's `MixFog` method. Pass your fragment color after lighting calculations, then use the result directly.

### ButoFog

ButoFog returns back the direct value of the Buto Fog at that screen position.
- RGB: the fog color
- Alpha: Outputs a float between 0 and 1. 0 when fully occluded, 1 when no occlusion

### Inputs

Both of these methods expect the following Fragment properties
1. Normalized Screen UV coordinates, and
1. World-space distance

Buto also includes wrapper methods for these two shader functions for direct compatibility with Shader Graph.

## Practical Examples
There are example subgraphs in the ~/Shaders/Subgraphs folder that demonstrate using these two methods in a Shader Graph context.
