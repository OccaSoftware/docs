Properties
==========

Motion Blur is controlled with the Volumes system, which has an API for runtime changes. Therefore, you can control the Motion Blur effect using the Volumes API to control Motion Blur during runtime.

![](/img/motion-blur/override.webp)

Motion Blur has the following properties:

Mode
----

Sets whether Motion Blur is enabled (or disabled) for the current override.

Quality Level
-------------

Sets the maximum number of sample points. Motion Blur dynamically increases the number of sample points up to the max defined by the quality level based on the length of the motion vectors. This setting has an impact on the quality of the final result as well as performance.

Shutter Speed
-------------

Sets the simulated duration for the camera capture. Longer shutter speeds mean that the camera aperture is open longer, so more blur will be present. Shorter shutter speeds mean the camera aperture is open more briefly, so less blur will be present.

Depth Separation Mode
---------------------

When Depth Separation Mode is enabled, Motion Blur uses the depth buffer to dynamically reduce the strength of a sample if it believes that the sample originated from behind the object sampling it.

Depth Separation Distance
-------------------------

When Depth Separation Mode is enabled, the Depth Separation Distance controls the falloff of the background samples. Increasing this value can help reduce artifacts related to Depth Separation, but may introduce artifacts from background bleeding.
