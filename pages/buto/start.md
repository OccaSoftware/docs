
# Get Started

Follow the steps in this section to install Buto in your project.

Get started quickly with the default settings in a Volume using the Buto override, then extend the features using Buto Lights and Fog Density Masks.

## Install

1. Download [Buto](https://www.occasoftware.com/p/buto).
2. Import to Unity.

## Adding Buto to Your Renderer

You must add the **Buto Render Feature** to your **Universal Renderer Data**.

1. Open your **Universal Renderer Data** in your **Project** window.
2. Click **Add Renderer Feature**.
3. Choose **Buto**.

## Enable Buto in a Scene

Buto is disabled by default.

To enable Buto, you need to use the [Volume Component System](/buto/volume-component-system-integration) built in to Unity. The simplest way to start is with a **Global Volume**.

1. Create a **Global Volume**.
2. Click **Add Override**.
3. Choose **Buto**.
4. Set the **Mode** to **On**.

## Enabling Post Processing on Your Camera

Buto will not render if your camera has **Post Processing** disabled. Enable it.

🤔 **Why?**:

- Other assets may generate and use cameras on-the-fly during runtime for writing to render textures or other scenarios. This rule prevents Buto from writing to those textures.

## Disable Buto on a Specific Camera

You may want to disable Buto on a specific camera. In general, the best way to do this is using a different renderer. If that's not possible for your project, we have a component. Here's how to use it:

1. Click on the **Camera** that you want to disable fog on.
2. Click **Add Component** > **Disable Buto Rendering**.

## Configure Buto

To configure Buto, you modify the settings in the volume component override.

You can have any number of volumes in your scene, and each volume can have a distinct set of Buto fog settings. Buto automatically interpolates between the options that you configure based on the volume component priority.

You can learn more about the volume component system in [Unity's documentation](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@16.0/manual/Volumes.html).
