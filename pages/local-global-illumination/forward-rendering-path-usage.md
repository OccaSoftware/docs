Forward Rendering Path Usage
============================

We recommend using this asset with the deferred render path.

However, you can also use it with the forward render path. 

When using this asset with the forward render path, you have two options. We recommend the simpler option. However, the advanced option is more physically accurate.
You should not use these two options together. You must choose between them. If you use the two options together, your materials will receive twice the normal lighting.

## Option 1: Use the Renderer Feature (Recommended)
1. In your Universal Renderer Data, set your Rendering Path to Forward.
2. In your Universal Renderer Data, add your Local GI Renderer Feature.
3. Then, open the Settings menu for your Local GI Renderer Feature.
4. Update the Render Path option in the Settings menu from Deferred to Forward.

## Option 2: Extend your Shaders (Advanced)
We have included an example of extending Unity URP's default lit shader to incorporate the Global Illumination data in DemoResources/ForwardCompatibilityExample/~. You can also use the .subgraph to sample the results in Shader Graph. Note that you should NOT enable the Renderer Feature when using this method.

In short, you need to make a copy of the relevant shader and any key include files. 

### Overview Implementation
For the Lit shader, this is the LitForwardPass.hlsl file.

Then, you need to rename the Lit shader to something identifiable. For example, "My Custom Lit Shader", by changing the Shader "..." statement at the top of the .shader file.

Then, you need to update the Lit shader. The Lit shader includes references to the original include files as #include "...." statements. You need to replace the target of the include declaration with the path of the new copy you created.

Finally, you need to update the include file's fragment pass to access the Local GI data.

### Example
#### Include the Local GI file by adding an #include declaration.
You need to include the Local GI hlsl file in order to make its methods available in your shader.
At the top of your shader file, where you include other utility files, also include the LocalGI.hlsl file.

Here's how:
```hlsl
//... Include this declaration after the Lighting.hlsl include...
#include "Assets/OccaSoftware/LocalGI/AssetResources/Resources/LocalGI.hlsl"
//...And before the #define statements...
```
‍

#### Update the fragment pass by calling the appropriate method.
You need to call the GetLocalGI method, which is in the LocalGI.hlsl file that we included earlier.
GetLocalGI has the following declaration:

```hlsl
void GetLocalGI(float3 normalWS, float3 positionWS, out float3 irradiance);
```

As you can see, the method requires you to pass in the normal vector (in world space), the vertex position (in world space), and an output color.
The method will use your normal vector and position to evaluate the global illumination contribution, and then update the irradiance.
The correct way to blend the irradiance with your mesh color is by multiplying the irradiance by the surface albedo - this is the diffuse color your mesh at that fragment.

Here's an example of how you might do this:

```hlsl
//...Compute the color after the call to UniversalFragmentPBR(...);
float3 irradiance;
GetLocalGI(inputData.normalWS, inputData.positionWS, irradiance);
color.rgb += irradiance * surfaceData.albedo;
//...and before the MixFog call...
```
