
# Using Buto with Custom Shaders

## Overview

Buto automatically works with any shader that writes to the depth buffer.

Some shaders don't write to the depth buffer (e.g., Transparent objects). You need to take some additional steps in order to make these shaders use Buto fog.

Buto supports both custom shader and shader graph fog implementations.

- [Shader Graph](#shader-graph)
- [Custom Shader](#custom-shader)

If you use Shader Graph, you should use an Unlit master node. The Lit Master node applies lighting calculations on the surface input properties that you provide. To apply Fog correctly, it needs to be applied on the output of the lighting calculations. Unity's Shader Graph does not support post-lighting injection points for materials, so you need to either directly modify the output shader graph code, or you need to use an Unlit master and do the lighting calculations yourself, or you need to write a custom shader.

## Add Fog to a Shader Graph [#shader-graph]

1. Click **Assets** > **Create** > **Shaders** > **Shader Graph** > **URP** > **Unlit Shader Graph**
2. Click on the **Shader Graph** file to open it.
3. Right click in the **Shader Graph** window.
4. Select **Create Node**.
5. Search for Buto Fog Blend.
6. Click on **Buto Fog Blend**.
7. Drag the final output color into the **Input Color** port in the **ButoFogBlend** node.
8. Drag the **ButoFogBlend** output port into the Shader Graph's **Base Color** node.

## Add Fog to a Custom Shader [#custom-shader]

### 1. Include the Buto utility methods

Before you can use Buto's fog sampler, you need to include the utility methods.

Add the following include statement at the top of your shader file:

```hlsl
#include "Packages/com.occasoftware.buto/Shaders/Resources/Buto.hlsl"
```

### 2. Call the ButoFogBlend method

In your Fragment method, you need to use Buto's utility method to get the fog data for that screen position. We offer two methods. We recommend using ButoFogBlend.

```hlsl
float3 ButoFogBlend(float2 ScreenPosition, float Distance, float3 InputColor)
```

Example implementation:

```hlsl
float2 screenPosition = ComputeNormalizedDeviceCoordinatesWithZ(input.positionWS, UNITY_MATRIX_VP).xy;
float viewDistance = -TransformWorldToView(input.positionWS).z;
color.rgb = ButoFogBlend(screenPosition, viewDistance, color.rgb);
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
