Projectiles
======================

The Interactive Projectile prefab is the method you will use to erode a projectile (line) shape from the smoke.

When an Interactive Projectile occurs and an Interactive Smoke is intersected by the forward vector of the projectile and the smoke is not behind any other occluders, then Interactive Projectile will notify the Interactive Smoke and erode a capsule shape of specified radius from the Interactive Smoke.

Below, you can see an example of the Interactive Smoke being eroded by an Interactive Projectile.

![](/img/responsive-smokes/projectiles/before.webp)

![](/img/responsive-smokes/projectiles/after.webp)

The Interactive Projectile occurs during the Start() method of the Interactive Projectile object. The radius and other configurable properties are described in the component. The position of the projectile is based on the transform's position. The forward vector of the projectile is based on the transform's rotation.

![](/img/responsive-smokes/projectiles/properties.webp)

The radius is set in world space units and specifies the radius of the erosion capsule.

The Projectile is applied to all Interactive Smokes that it intersects until it hits a non-smoke occluder. The projectile erodes the smoke during the In duration, then is static for the Lifetime, then reduces the erosion over the the Out Duration. The overall lifetime of the object is equal to the sum of the In Duration, the Lifetime, and the Out Duration.

You must set the Interactive Smoke layer for the Projectile to correctly identify and notify any Interactive Smokes in your scene.
