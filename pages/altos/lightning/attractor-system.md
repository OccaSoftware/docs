# Lightning Attractor System

## Introduction

The `LightningAttractorSystem` class manages and coordinates attractors. Your bolt strategy can reference and use the active attractors to influence the behavior of lightning bolts.

## Usage

Interact with the `LightningAttractorSystem` from a `LightningAttractorStrategy`

```csharp
OnEnable()
{
  LightningAttractorController.Add(this);
}

OnDisable()
{
  LightningAttractorController.Remove(this);
}
```

Interact with the `LightningAttractorSystem` from a `LightningBoltStrategy`

```csharp
GenerateLightning()
{
    LightningAttractorStrategy attractor = LightningAttractorController.GetHighestPriorityAttractor(this);
}
```

### Properties

#### `Attractors`

- Type: `List<LightningAttractorStrategy>`
- Description: A list containing all registered lightning attractors.

### Methods

#### `Add(LightningAttractorStrategy attractor)`

```csharp
public static void Add(LightningAttractorStrategy attractor)
```

- Adds a `LightningAttractorStrategy` instance to the list of attractors.

#### `Remove(LightningAttractorStrategy attractor)`

```csharp
public static void Remove(LightningAttractorStrategy attractor)
```

- Removes a specified `LightningAttractorStrategy` instance from the list of attractors.

#### `GetAll()`

```csharp
public static List<LightningAttractorStrategy> GetAll()
```

- Returns a list containing all currently registered attractors.

#### `GetHighestPriorityAttractor(LightningBoltStrategy strategy)`

```csharp
public static LightningAttractorStrategy GetHighestPriorityAttractor(LightningBoltStrategy strategy)
```

- Returns the attractor with the highest priority for a given `LightningBoltStrategy`.

#### `GetLowestPriorityAttractor(LightningBoltStrategy strategy)`

```csharp
public static LightningAttractorStrategy GetLowestPriorityAttractor(LightningBoltStrategy strategy)
```

- Returns the attractor with the lowest priority for a given `LightningBoltStrategy`.
