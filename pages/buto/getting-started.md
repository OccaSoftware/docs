---
sidebar_position: 1
title: Getting Started with Buto
---
# Getting Started

Follow the steps in this section to install Buto in your project.

Get started quickly with the default settings in a Volume using the Buto override, then extend the features using Buto Lights and Fog Density Masks.

## Installing Buto

1. To acquire Buto, license it on the Unity Asset Store.
1. To import Buto, use the Unity Package Manager.

## Adding Buto to Your Renderer

To use Buto, you must add the Buto Render Feature to your Renderer.

1. Open your Universal Renderer Data
1. Click Add Renderer Feature
1. Choose Buto

## Enabling Buto in a Scene

By default, Buto is disabled.

To enable Buto, you need to use the Volume framework. The simplest way to start is with a Global volume.

1. Create a Global Volume
1. Click Add Override
1. Choose Buto
1. Set the Mode to On.

## Enabling Post Processing on Your Camera

If your camera has Post Processing disabled, Buto will not render on that camera.

:::note Why?
Other assets may generate and use cameras on-the-fly during runtime for writing to render textures or other scenarios. This rule prevents Buto from writing to those textures.
:::

So, click on your main camera and make sure that Post Processing is enabled.

## Disabling Buto on a Specific Camera

To disable Buto on a specific camera, add the DisableButoRendering component to that camera.

## Customizing Buto

To customize Buto, you modify the settings in the volume component override.

You can have any number of volumes in your scene, and each volume can have a distinct set of Buto fog settings. Buto automatically interpolates between the options that you configure based on the volume component priority.

You can learn more about the volume component system in Unity's documentation: <https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@16.0/manual/Volumes.html>.
