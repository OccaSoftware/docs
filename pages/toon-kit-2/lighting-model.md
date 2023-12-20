# Lighting Model

Toon Kit 2 offers a powerful and complex lighting model to give you control over your toon shaded materials, and to make these toon shaded materials render with the highest quality.

In this article, we will cover some of the lighting model properties that control how Toon Kit 2 renders your materials.

## Lighting Mode

Toon Kit 2 offers two lighting modes: Constant and Linear.

The constant lighting mode uses a fixed lighting term for any part of your material that is lit by the main directional light. This mode is similar to traditional toon lighting effects.

The linear lighting mode uses a linear falloff term for your material based on how much light this part of the material would receive from the main directional light. This mode offers more complexity and detail in your lighting while retaining a toon lighting aesthetic.

Constant Lighting Mode:

![](/img/toon-kit-2/lighting-model/constant.webp)

Linear Lighting Mode:

![](/img/toon-kit-2/lighting-model/linear.webp)

## Shadow Tint

Toon Kit 2 enables you to tint the color of shaded regions of your material. This tint is combined together with the ambient lighting color.

In the following example, we set the shadow tint to a blue color.

![](/img/toon-kit-2/lighting-model/shadow-tint.webp)

## Midpoint and Midpoint Strength

Toon Kit 2 offers control over a second gradation of lighting. We call this the midpoint lighting.

The second gradation can begin earlier or later depending on the midpoint setting. The intensity of the second gradation can be darker or lighter depending on the midpoint strength.

Midpoint 0.0:

![](/img/toon-kit-2/lighting-model/midpoint-0.webp)

Midpoint 0.5:

![](/img/toon-kit-2/lighting-model/midpoint-50.webp)

Midpoint 1.0:

![](/img/toon-kit-2/lighting-model/midpoint-100.webp)

## Specular and Rim Lighting

Toon Kit 2 also offers the ability to control the specular lighting and rim lighting.

For the specular lighting, you can control the color as well as a specular dab texture that adds liveliness to your scene.

For the rim lighting, you can control the threshold and the color.

Specular and Rim Lighting disabled:

![](/img/toon-kit-2/lighting-model/no-specular-no-rim.webp)

Specular and Rim Lighting enabled:

![](/img/toon-kit-2/lighting-model/specular-rim.webp)
