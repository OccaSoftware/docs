---
sidebar_position: 1
---
Overview
============================

The shader in Super Simple Skybox includes support for rendering the sky, ground, a sun, a moon, texture-based stars and procedural stars, as well as procedural clouds. The asset also offers two basic modes of operation: Day and Night mode or Constant mode.

In this overview document, we will briefly review the capabilities of these features.

Color Modes
-----------

Super Simple Skybox offers two basic modes of operation: Day and Night Mode or Constant Mode.

Day and Night Mode makes it possible for you to define color settings for the sky, the clouds, and to define the star brightness during daytime. The Super Simple Skybox shader will automatically interpolate between the input colors based on Sun directional light that you specify using the Sun.cs component.

The Constant Mode makes it possible for you to define these settings externally yourself and manage the interpolation on your own.

Sky and Ground Rendering
------------------------

Super Simple Skybox renders a dynamic sky that interpolates between a horizon color and sky color. The horizon color is further attenuated by a horizon desaturation slider to simulate distant contrast reduction and add depth to your sky. You can control the blending factor between the sky and horizon colors.

If you are using Day and Night Color Mode, then you can set a Day Color and a Night Color for the Sky and Horizon colors. Super Simple Skybox will automatically interpolate between these sets of colors for you.

Super Simple Skybox also renders a Ground "plane". This plane fades off as it approaches the horizon.

Sun Rendering
-------------

You can enable or disable the sun disc rendering. The position of the sun disc is based on the direction of the transform of the Sun component.

You can set the angular diameter, color, and sky (atmosphere) settings for the sun.

Super Simple Skybox also offers a set of options related to the sunset.

The sun is rendered using physically-based limb darkening algorithms.

Moon Rendering
--------------

You can enable or disable the moon disc rendering. The position of the moon disc is based on the direction of the transform of the Moon component.

You can set the angular diameter, color, and sky lighting settings for the moon.

Star Rendering
--------------

Super Simple Skybox enables you to enable or disable Star Rendering.

Star Rendering consists of two sub-systems: Texture-based Stars and Procedural Stars. You can combine these or use them separately.

The Texture-based Stars are rendered using a seamlessly tiling star texture. Super Simple Skybox includes several textures to choose from, or you can author one yourself.

The Texture-based Stars rotate on a fixed direction. You can control the speed or disable rotation altogether.

The Procedural Star system uses dynamically-generated noise to create stars.

The Procedural Star system can be fixed in place, rotate independently, or rotate with your sun. You control this using the SetStarRotation component.

You can also control the brightness, daytime brightness, saturation, horizon falloff, and other settings.

Cloud Rendering
---------------

Super Simple Skybox enables you to enable or disable cloud rendering.

Clouds are rendered using layers of texture-based noise to create believable and detailed cloud formations. You can provide the texture yourself or use one of the 20+ included texture assets.

Super Simple Skybox offers a variety of options to control the look and lighting for these clouds.