---
title: Quick Start
---

import {Steps} from 'nextra/steps'

# Quick Start

Follow the steps in this section to install Cloud Shadows in your project. Get started quickly with the default settings, then configure Cloud Shadows to help it fit your project's aesthetic.

## Installation

Cloud Shadows is a paid package, available on the Unity Asset Store. You install Cloud Shadows by licensing it on the Unity Asset Store, then importing it to your project like any other Unity Asset.

After you install Cloud Shadows, a new *Cloud Shadows*folder appears in the Packages, and a new component is available in your Add Component Menu: OccaSoftware -> Cloud Shadows -> Cloud Shadows.

## First Setup

1. Create a new Material, assign the Cloud Shadows shader (OccaSoftware/Cloud Shadows/CloudShadows) to the material.
2. Create a new Plane GameObject, scale it up, and position it above your scene.
3. Assign the material to the Mesh Renderer for this GameObject.
4. Add the OccaSoftware -> Cloud Shadows -> Cloud Shadows component to the GameObject.
5. Assign a cloud texture to the Texture input slot (there are some included for you in the package files).

## Configuring Cloud Shadows

You can configure the settings for your Cloud Shadows directly from the Cloud Shadows component.

Some of the options override constant material properties, other options are tracked and stored in the component and continuously updated (e.g., hidden offset values).

This approach makes it possible for you to change the wind direction during runtime and having it "just work".

The Cloud Shadows dithering scale is not updated automatically for you. You need to configure the cloud shadows dithering to a level that looks good for your scene.
