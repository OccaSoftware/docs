Global Lighting Properties
==========================

Toon Kit 2 materials expect you to set up and configure a Toon Kit 2 Manager component in your scene. This component controls global settings for the material's ambient lighting and shadows.

The [Getting Started](getting-started) guide explains how to set up the Toon Kit 2 Manager component.

Ambient Lighting
----------------

The Ambient Lighting Color is combined multiplicatively with the albedo of the surface material. The Ambient Light Color does not affect the specular and rim lighting of the material.

If you set the Ambient Light Color to black, then the unlit parts of the material will be completely black. This can be nice if you want your materials to have high contrast and dark shadows.

Ambient Lighting - Black:

![](/img/toon-kit-2/global-lighting/ambient-black.webp)

Ambient Lighting - Middle Gray:

![](/img/toon-kit-2/global-lighting/ambient-gray.webp)

Ambient Lighting - Red:

![](/img/toon-kit-2/global-lighting/ambient-red.webp)

Shadow Strength
---------------

The Toon Kit 2 Manager component also enables you to control the intensity of shadows received by Toon Kit 2 materials in your scene.

Remember that this only affects shadow-mapped shadows, not regions that are unlit as a result their face normal direction.

In the below example, we have set up two spheres. The sphere on the top right is casting a shadow on the sphere in the middle of the scene.

With Shadow Strength set to 1:

![](/img/toon-kit-2/global-lighting/shadow-strength-1.0.webp)

With Shadow Strength set to 0.5:

![](/img/toon-kit-2/global-lighting/shadow-strength-0.5.webp)
