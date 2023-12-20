# Quick Start

This article will describe how to get started with our Motion Blur package for Unity URP.

You are expected to be familiar with [Post Processing in the Universal Render Pipeline](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@12.1/manual/integration-with-post-processing.html).

Motion Blur uses the Volume system, so you need to add the Motion Blur override to a Volume in your scene in order to enable Motion Blur.

Unity already includes an override titled Motion Blur in their built-in Post Processing suite, so our override is named Better Motion Blur.

To add Motion Blur to your scene, follow the below steps:

1. Select a GameObject that contains a Volume component.
2. In the Volume Component's Inspector window, click on Add Override. Then click OccaSoftware -> Better Motion Blur.
3. Then, enable the Mode override and set the mode to On.
4. URP will now apply our Motion Blur package to any camera affected by this volume.
