Explosions
=====================

The Interactive Explosion prefab is the method you will use to erode a sphere shape from the smoke.

When an Interactive Explosion occurs and an Interactive Smoke is within the Explosion radius, then the Interactive Explosion will notify the Interactive Smoke and erode the area within the Explosion radius from the Interactive Smoke.

Below, you can see an example of the Interactive Smoke being eroded by an Interactive Explosion.

![](/img/responsive-smokes/explosions/before.webp)

![](/img/responsive-smokes/explosions/after.webp)

The Interactive Explosion occurs during the Start() method of the Interactive Explosion object. The radius and other configurable properties are described in the component. The position of the explosion is based on the transform's position. The transform's rotation and scale are unused.

![](/img/responsive-smokes/explosions/properties.webp)

The radius is set in world space units.

The Explosion is applied to all Interactive Smokes within the defined radius. The smoke fades in during the In duration, then is active for the Lifetime, then fades out for the Out Duration. The overall lifetime of the object is equal to the sum of the In Duration, the Lifetime, and the Out Duration.

You must set the Interactive Smoke layer for the Explosion to correctly identify and notify any Interactive Smokes in your scene.
