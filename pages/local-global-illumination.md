Local Global Illumination
===============================

Local Global Illumination is a straightforward global illumination system for using local scene data to create dynamic global illumination in your Unity scene. Local Global Illumination solves the complex management of setting up a render probe, tracking your target position, sampling the local region, converting that data to a diffuse irradiance map, and then applying the diffuse irradiance data to the local scene region using Image-Based Lighting techniques. It is designed to make it easy to drop in a local global illumination probe and just get global illumination without any additional work. It is also designed to just work without any baking steps so that you can quickly prototype a scene and release a project without waiting for lightmapping.

Local Global Illumination works regardless of your scene content. When you change your scene - such as changing out a material, a mesh, or even swapping to an entirely new level - Local Global Illumination dynamically adapts on-the-fly to keep your lighting in sync. There is no need to re-bake your lighting just because you change the color of a material.

Local Global Illumination works in real time across all genres including casual games, FPS, third person, side-scroller, top down, and RTS.

Local Global Illumination works well with other Unity tools and assets.

Requirements
------------

Local Global Illumination depends on the Universal Render Pipeline. If you are already using the Universal Render Pipeline, just install it and start using it. If you do not have Universal Render Pipeline available, you need to import it.

Local Global Illumination version 1.0.0 and later is compatible with the following versions of the Unity Editor:

-   2021.3 and later.