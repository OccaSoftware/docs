Smokes
=================

Introduction
------------

This article with cover how to use the Interactive Smoke prefab.

![](/img/responsive-smokes/smokes/properties.webp)

The Interactive Smoke prefab is configured to work out-of-the-box with reasonable default settings.

The Responsive Smokes system requires the Interactive Smoke to have a Mesh Renderer with the Responsive Smoke material, a Cube Mesh Filter, an Interactive Smoke component, and a Box Collider with the Is Trigger option enabled.

The Interactive Smoke must also be set to a non-default layer, e.g., a new "InteractiveSmoke" Layer.

All of the Interactive Smoke properties are configured from the Interactive Smoke component as well as the Transform component. You can completely ignore the M_ResponsiveSmoke material - the material properties are overridden by the Interactive Smoke component during runtime.

Smoke Instantiation
-------------------

When you Instantiate the Interactive Smoke, the Start() method is called. This Start() method kicks off a propagation phase. The smoke gradually grows during this propagation phase. The transform position and scale are inputs to the smoke propagation phase, so make sure that you set these values in the frame that you Instantiate the smoke.

Smoke Voxels
------------

The smoke is made up of a set of voxels - 3D regions in space where smoke can or cannot exist. The Interactive Smoke uses the Physics system to dynamically test whether the Smoke is capable of growing to a new voxel based on the physics layout of your scene (e.g., is there a wall in the way?).

The smoke consists of a pre-defined number of voxels. The more voxels, the more detailed the geometry representation will be. However, it will also take longer to propagate and require more performance resources to generate and render the smoke. The SDF Quality option abstracts this decision away from you so that you can just choose a Low, Medium, or High quality scene representation.

Smoke Propagation Coroutine
---------------------------

During the propagation phase, the smoke initiates a coroutine to propagate the smoke.

The duration of time that is required for this propagation is not deterministic and depends on system resource usage. The propagation coroutine is responsible for propagating the smoke.

The smoke propagation consists of a number of discrete physics checks. In short, the smoke attempts to expand to all unoccupied adjacent voxels for each step.

The coroutine pre-calculates the number of steps that will be required. This coroutine tracks its own runtime duration each frame and automatically yields after it has taken a certain length of time to execute. This allows the smoke to generate gradually over time without using an excessive amount of system resources in a given frame, which would lead to stuttering and frame drops.

If the physics check required less time than the frequency would require, the smoke waits until the next check would occur normally. If the physics check required more time than the frequency would require, the smoke kicks off the next check immediately. The Maximum Frame Cost Milliseconds controls the maximum duration of system resources that Responsive Smoke will allocate to a Physics check in a given frame. This is per-smoke, not overall.

The Expansion Update Frequency Seconds option controls the frequency of Physics Checks during propagation. If you set it to 0, the propagation will simply be limited by system resources according to the Maximum Frame Cost Milliseconds option.

If you set the Maximum Frame Cost Milliseconds option to a high number, then the propagation will simply be limited by the Expansion Update Frequency Seconds (if set to 0, then it will be instantaneous).

The smoke also has a target fill percentage, which is the ratio of total voxels that the smoke will attempt to occupy. The higher the fill percentage, the more voxels the smoke will attempt to occupy. The voxel structure will always use a 3D Box Grid, so if you completely fill the voxel structure then the smoke will have a box-like shape.

Interactive Smoke Transform Properties
--------------------------------------

You should not set a rotation for the Interactive Smoke. It will be unable to propagate and render correctly.

You should set a position and a scale.

The position determines where the Interactive Smoke will propagate from. If you move the smoke after it has been spawned, it will not re-propagate.

The scale determines the overall size of the Interactive Smoke as well as the size of each voxel. If you move the smoke after it has been spawned, it will not re-propagate.
