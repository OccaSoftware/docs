
# Event Providers

Super Simple Skybox includes a few event providers. These event providers are intended to help you coordinate your gameplay with this asset's lightweight time of day system.

This article assumes that you are familiar with the Sun and Moon components required to set up a Sun and Moon in the Super Simple Skybox system.

## OnRise and OnSet

There are two primary event providers for Super Simple Skybox: OnRise and OnSet. These event providers are members of the DirectionalLight class. Both the Sun class and Moon class inherits from the DirectionalLight class. Therefore, both the Sun class and Moon class have access to these event providers.

Super Simple Skybox monitors the "state" of each directional light. The directional light can be either "Up", or "Down". "Up" is defined as being above the horizon. "Down" is defined as being below the horizon. The horizon is defined as the x-z plane.

OnRise is invoked when the related object moves from the "Down" state to the "Up" state. In other words, when the object moves from below to above the horizon.

Similarly, OnSet is invoked when the related object moves from the "Up" state to the "Down" state. In other words, when the object moves from above to below the horizon.

## Definitions

`public event Action OnRise{:cs}`

`public event Action OnSet{:cs}`

## Subscribe

To subscribe to these event providers, simply get an instance of the Sun or Moon component.

Then, subscribe to the action as you would any other:

`sun.OnRise += Sunrise{:cs}`

Always make sure to unsubscribe from an event provider when you disable or destroy your event listener.

`sun.OnRise -= Sunrise{:cs}`
