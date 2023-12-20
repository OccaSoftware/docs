---
sidebar_position: 1
---
Getting Started
=================================

This article will walk you through the steps required to install, set up, and configure Responsive Smokes in your project.

Install Responsive Smokes
-------------------------

Responsive Smokes is a package that is available on the Unity Asset Store. You license and import Responsive Smokes like any other Unity Asset Store asset. Once you import Responsive Smokes to your project, it will appear in the Assets/OccaSoftware/ResponsiveSmoke/ directory.

The Responsive Smokes package consists of two main sub-directories: AssetResources and DemoResources. You can safely delete the DemoResources from your project at any time. Never delete the AssetResources folder unless you want to uninstall Responsive Smokes from your project.

Configure your Layer Masks
--------------------------

Responsive Smokes expects your Interactive Smokes to be set to a particular layer. The name of the layer is not important, but you do need to set the Layer on the Interactive Smoke Prefab GameObject. You also need to set it on the components for the Interactive Projectile and Interactive Explosion.

### Configure the Interactive Smoke Layer Mask

Click on the Interactive Smoke Prefab. Click the Layer dropdown, then create a new Layer and name it InteractiveSmoke. Then, assign the Interactive Smoke prefab to that layer.

![](/img/responsive-smokes/getting-started/layer-mask-smoke.webp)

### Configure the Interactive Explosion and Interactive Projectile

Now click on the Interactive Projectile prefab. In the Interactive Projectile component, click on the dropdown for the Interactive Smoke Layer Mask. Then, set the mask to the new InteractiveSmoke layer.

Repeat this process for the Interactive Explosion prefab.

![](/img/responsive-smokes/getting-started/layer-mask-interactable.webp)

Create a new Responsive Smoke
-----------------------------

This section will outline how to create a new Responsive Smoke in your scene.

Responsive Smokes includes prefabs that are configured with the required components and materials for Responsive Smokes to work correctly. In general, you should use these prefabs.

To create a new Responsive Smoke, you need to use the Interactive Smoke prefab. Simply drag and drop the Responsive Smoke into your scene.

When you play the scene, the Start() event will be called on the Smoke, and the smoke will automatically propagate, live through its lifetime, and then expire. The smoke prefab will automatically destroy itself when it has expired.

As you can see, the best way to use these smoke prefabs is to Instantiate a new Interactive Smoke prefab GameObject when you want to spawn the smoke. The smoke will propagate, live, expire, then destroy the GameObject.

Create a new Interactive Explosion
----------------------------------

The Interactive Explosion works the same way as the Interactive Smoke. You create an instance of the prefab, the Explosion's start callback is executed, the Explosion occurs, and then destroys itself upon expiry.

You can create a new Interactive Explosion by simply adding a new Interactive Explosion prefab to your scene while the scene is running and the Interactive Smoke is active. Of course, the Explosion will trigger right away.

In general, you should Instantiate a new Interactive Explosion GameObject when and where you want to spawn the explosion. You should Instantiate the GameObject according to the source position of the explosion. The explosion will execute, inform any nearby Smokes, and then clean itself up when it expires.

Create a new Interactive Projectile
-----------------------------------

The Interactive Projectile works the same way as the Interactive Explosion. The Interactive Projectile will always aim in the Z-Forward direction.

When you instantiate it, you should set the position and rotation according to the source position of the projectile and the projectile's direction of travel. This asset does not currently support bullet drop for interactive projectiles.
