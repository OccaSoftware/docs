Motion Blur
=================

The Motion Blur package is full-screen image post-process for Unity URP.

The Motion Blur effect blurs the image in the direction of the camera movement and in the direction of per-pixel movement for each object in the scene. This effect is used to simulate relatively long exposures of real-world photographic captures. In the real world, this effect occurs because the camera gathers light across the duration of the capture. Any relative object motion will cause the final capture to include light information from the range of the light that hit that "pixel" on the sensor. For this package in Unity, we simulate this effect by using per-pixel motion vectors that describe the relative motion of a pixel from the previous frame to the current frame. Then, we sample pixels that would have "hit the sensor" along this vector.

The images below demonstrate a scene with and without Motion Blur.

Without Motion Blur:

![](/img/motion-blur/cover-1.webp)

With Motion Blur:

![](/img/motion-blur/cover-2.webp)

You can download this package by licensing it on the Unity Asset Store. After you license the package, you download and import it to your project the same way you would any other Unity Asset Store package.

Unity URP's built-in Motion Blur effect only uses camera motion to drive the Motion Blur effect. In contrast, this package uses both camera motion and object motion. As a result, this package is more accurate and provides better results across a wider variety of scenarios than the built-in Motion Blur effect.

Similar to Unity's included post-processing effects, this Motion Blur package uses the Volumes system to drive the effect settings. You should read the [built-in Volumes documentation](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@16.0/manual/Volumes.html) before you use this Motion Blur package. Motion Blur is built on top of the Volumes system and expects that you have some level of familiarity with how to create and apply Volume overrides.

This package also uses the Renderer Feature system to configure URP's scriptable render pipeline to create Motion Vectors, sample the screen texture, and apply the Motion Blur to the screen. You should familiarize yourself with the [Renderer Feature documentation](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@16.0/manual/urp-renderer-feature-how-to-add.html) before you use this Motion Blur package.

Installation
------------

To install this package, simply license and import the asset from the Unity Asset Store. Once you import the package, you will find it in a new directory, Packages/Motion Blur/~.

This asset includes usage examples in the ~/Samples folder. You can safely delete that folder if you no longer need the usage examples.

You should never delete the package folder unless you are removing Motion Blur from your project or upgrading to a new version.

Requirements
------------

Motion Blur is compatible with the following versions of the Unity Editor:

- 2021.3 and later.

Compatibility
-------------

Motion Blur requires support for:

- Compute Shaders
- Depth Texture
- Motion Vectors

Upgrading
---------

You should clean your previous installation of the package, then import the new package version.

If you upgrade without removing the previous installation and experience errors, try removing the installation first.
