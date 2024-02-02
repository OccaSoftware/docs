# Lightning Bolt Controller

## Introduction

The `LightningBoltController` class serves as a central component in the Altos Lightning System.

This component manages the generation of lightning bolts.

It provides a flexible and extensible framework for controlling the frequency of lightning generation and selecting strategies for creating diverse lightning effects.

## Usage

### Properties

#### `frequency`

- Type: `float`
- Default: `1`
- Description: The frequency at which the controller attempts to generate lightning bolts. A lower value increases the frequency.

#### `strategies`

- Type: `List<LightningBoltStrategy>`
- Description: A list of strategies that the controller randomly selects from to generate lightning bolts.

#### `instance`

- Type: `LightningBoltController`
- Description: A static reference to the current instance of the `LightningBoltController`.

### Methods

#### `GenerateLightning(LightningBoltStrategy boltStrategy)`

```csharp
public void GenerateLightning(LightningBoltStrategy boltStrategy)
```

Generates a lightning bolt using the provided strategy.

### Example Usage

1. Add a new GameObject in your Scene.
2. Click **Add Component** > **Lightning Bolt Controller**.
3. Add concrete Bolt Strategies to the Strategies list.
