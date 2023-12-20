# Adjusting Fog Color by Distance

## Using Custom Color Ramps

To adjust the fog color by distance, you use a color ramp.

A color ramp is combined multiplicatively with the simple fog color settings included in the asset.

## Understanding Custom Color Ramps

Your Color Ramp texture can have any dimensions. However, be aware that it is sampled as follows:

The X coordinate is selected by the relative distance from the camera to the end of the volumetric fog.

Y coordinate is pre-determined for each color type. For each x coordinate,

* Emission Color is selected from the top third of the image.
* Lit Color is selected from the center third of the image.
* Shadow Color is selected from the bottom third of the image.

Here is an example of a Color Ramp with no emission, warm lit colors, and purple shadows.
![Color ramp example](/img/buto/color-ramps/color-ramp.png "Color ramp")

The Color Ramp is sampled using Point filtering. Increase the resolution of the texture in order to leverage smoother gradients. Note that this is typically unnecessary. Buto accumulates fog data gradually over distance, which naturally lends a smooth gradient to the results.

## Creating Custom Color Ramps

Buto does not currently include a utility to author color ramps directly.

Use [Adobe Color] to come up with new color ramps, and then using [GIMP] to create them.

[Adobe Color]: https://color.adobe.com/
[GIMP]: https://www.gimp.org/
