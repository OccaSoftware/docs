
# Setting Local Fog Properties

## Understanding Fog Density Masks

Buto enables you to use a box or a spherical density mask to modify the fog density in a given region.

**💡 Info**:

- Buto will render up to 8 fog density masks at one time. If you have more than 8 density masks in your scene, Buto will render the nearest 8 based on the distance to the camera.

## Create a Fog Density Mask

1. Right click in your Hierarchy > Rendering > Buto Fog Density Mask

## Increase the Fog Density in a Region

1. Create a new Fog Density Mask
1. Set the Mode to Multiplicative
1. Set the Density Multiplier to something high, like 10

## Decrease the Fog Density in a Region

1. Create a new Fog Density Mask
1. Set the Mode to Multiplicative
1. Set the Density Multiplier to something small, like 0

## Disable fog outside of a Region

1. Create a new Fog Density Mask
1. Set the Mode to Exclusive

**💡 Info**:

- When there is more than one Exclusive Fog Density Mask active in the scene at the same time, Buto will render fog that is within the range of either mask.
