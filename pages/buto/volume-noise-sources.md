
# Volume Noise Sources

## About

The volume noise source is used as an input to the 3D noise method during the fog density calculations.

We have included 5 types of procedural, customizable volume noise sources. These are Perlin, Perlin-Worley, Worley, Billow, and Curl noise sources.

You can customize the Quality level, Frequency, Octaves, Lacunarity, Gain, Invert, and Seed properties for each. These properties apply to the generated noise texture. You can separately control how Buto renders the noise texture by configuring the settings in the Volume Noise Rendering section.

You can also use a custom texture input or leave the volume noise source blank.

## Overview

Buto enables you to use Volumetric Noise, or 3D Noise, in order to define the structure of the fog in your scene. This noise is tiled repeatedly across a given cube domain. In effect, it describes the density of the fog in 3-dimensional space. The base fog value is multiplied by the 3D Noise value sampled at a given point in space. Therefore, when the 3D Noise is close to a value of 0, the fog will also be close to 0. In the same way, when the 3D Noise is close to a value of 1, the fog will also be close to the base fog value.

You can choose to go without a 3D Noise texture by setting your Volume Noise Source as ‘None’.

If you do choose to use a 3D Noise texture, you have two options:

1. You can use your own pre-computed 3D Texture. These can be challenging to compute, but it does give you the most control over the final look of the fog.
1. You can use our built-in noise generation algorithms to create 3D Textures according to a set of input parameters that we have exposed for you.

## Using a Pre-Computed Texture

If you choose to use your own pre-computed texture, you will need to render your noise as a 2D Texture Array, then import it to Unity, and then convert it to a Texture3D using a helper script (not included in Buto).

Buto expects the input Texture to be a 4-channel texture with data in the red, green, blue, and alpha channels. Buto automatically resamples this texture data by assigning decreasing importance to each channel and then summing the result together. See the table below for an example of how this works.

| Channel      | Input Value       | Sample Weight | Sampled Value |
|:-------------|:------------------|:--------------|:--------------|
| R            | 0.5               | 0.53          | 0.265         |
| G            | 0.8               | 0.27          | 0.216         |
| B            | 0.3               | 0.17          | 0.039         |
| A            | 0.6               | 0.07          | 0.042         |  

Then we calculate the final value by summing up the sampled values as follows:

0.265 + 0.216 + 0.039 + 0.042 = 0.562

We use this method rather than using a pre-compressed single-channel texture because it gives better visual results overall and also gives better results when remapping the value range to a smaller, clamped range.

## Built-In Noise Generation System

Buto includes a noise generation system that will procedurally create Volumetric Noise, bake it to a 3D Texture, and associate the 3D Texture to the corresponding Unity volume component asset.

Buto’s includes the following Volume Noise Types:

1. Perlin
1. Worley
1. Perlin-Worley
1. Billow
1. Curl

### Usage

You can provide a Seed value to randomize the results. The results for each noise type will be consistent for a given seed.

You can define the Quality setting to limit the size of the texture asset, and you can Invert the results to achieve double the number of base noise types.

Using the Frequency slider allows you to describe how many noise cells will be contained within a given texture. The Octaves slider enables you to layer the noise with itself, and the Lacunarity and Gain parameters describe the rate of frequency change from layer to layer and the rate of strength loss from layer to layer.

These 3D Textures may be generated on-the-fly during runtime, which can cause your game to freeze while the texture is generated and saved. In order to avoid these freezes during gameplay, I recommend that you load the textures ahead of time. One method of doing this is by triggering each fog volume during your load scene.
