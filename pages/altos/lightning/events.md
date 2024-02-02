# Lightning Events Documentation

## Introduction

The Lightning Events module introduces two fundamental classes, `BoltEvent` and `StrikeEvent`.

These classes represent lightning-related events within the Altos Lightning System. These classes encapsulate information about lightning bolts and strikes.

Additionally, the `LightningEventDispatcher` class provides a centralized mechanism for dispatching and handling these events.

## BoltEvent and StrikeEvent Classes

### `BoltEvent`

- **Description:** Represents an event related to the generation of a lightning bolt.
- **Properties:**
  - `position`: The position in the world space where the lightning bolt was generated.
  - `bolt`: The `LightningBoltStrategy` instance associated with the event.

### `StrikeEvent`

- **Description:** Represents an event related to a lightning strike.
- **Properties:**
  - `position`: The position in the world space where the lightning strike occurred.
  - `attractor`: The `LightningAttractorStrategy` instance responsible for attracting the lightning bolt.
  - `boltEvent`: The associated `BoltEvent` providing information about the generated lightning bolt.

## Usage

### `LightningEventDispatcher` Class

#### Overview

The `LightningEventDispatcher` class acts as a centralized hub for dispatching and handling lightning-related events. It supports both traditional C# events and Unity events.

#### Events

- **`OnBolt`**
  - Type: `Action<BoltEvent>`
  - Description: Invoked when a bolt event occurs.

- **`OnStrike`**
  - Type: `Action<StrikeEvent>`
  - Description: Invoked when a strike event occurs.

- **`OnBoltUnityEvent`**
  - Type: `UnityEvent<BoltEvent>`
  - Description: A Unity Event version of the `OnBolt` event.

- **`OnStrikeUnityEvent`**
  - Type: `UnityEvent<StrikeEvent>`
  - Description: A Unity Event version of the `OnStrike` event.

#### Methods

- **`DispatchBoltEvent(BoltEvent boltEvent)`**
  - Description: Dispatches a bolt event, triggering any subscribed methods or Unity events.

- **`DispatchStrikeEvent(StrikeEvent strikeEvent)`**
  - Description: Dispatches a strike event, triggering any subscribed methods or Unity events.

### Example Implementation

```csharp
using UnityEngine;
using OccaSoftware.Altos.Runtime;

public class ExampleEventListener : MonoBehaviour
{
    private void OnEnable()
    {
        // Subscribe to the OnBolt event
        LightningEventDispatcher.OnBolt += OnBoltEventHandler;

        // Subscribe to the OnStrike event
        LightningEventDispatcher.OnStrike += OnStrikeEventHandler;
    }

    private void OnDisable()
    {
        // Unsubscribe from the events to avoid memory leaks
        LightningEventDispatcher.OnBolt -= OnBoltEventHandler;
        LightningEventDispatcher.OnStrike -= OnStrikeEventHandler;
    }

    private void OnBoltEventHandler(BoltEvent boltEvent)
    {
        // Handle the bolt event
        Debug.Log($"Bolt generated at {boltEvent.position}");
    }

    private void OnStrikeEventHandler(StrikeEvent strikeEvent)
    {
        // Handle the strike event
        Debug.Log($"Strike occurred at {strikeEvent.position} by {strikeEvent.attractor.gameObject.name}");
    }
}
```

This example demonstrates how to subscribe to and handle the `OnBolt` and `OnStrike` events using the `LightningEventDispatcher`. Events provide a flexible way to react to lightning-related occurrences within your Unity projects.
