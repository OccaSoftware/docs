# Gaussian Blur

Gaussian Blur is a post-process feature that supports blurring of scene geometry and UI elements in 2D and 3D scenes.
Download [Gaussian Blur](https://www.occasoftware.com/p/gaussian-blur)

## Installation

1. Add the Gaussian Blur render feature to Universal Renderer Data asset.
2. Add the Gaussian Blur override to a volume in your scene.
3. Enable the Override
4. Set the Blur Radius

## Using full-screen blur

By default, the Blur Radius in your Override applies to the screen. On override, increase the radius of the Gaussian Blur. You will see the blur affect the entire scene.

## Using blur with the 2D Renderer

To blur background elements in the 2D renderer, you need to use two cameras.

1. Create a new Layer, call it "Blur."
2. On your existing Camera, exclude the Blur layer from the Culling and Volume masks. Set the Priority to 1. Set the Background Type to Uninitialized.
3. Create a new Camera, set the Culling Mask and Volume Masks to the Blur layer, set the Priority to -1.
4. Move your Gaussian Blur override to the Blur layer.
5. Move any objects you want to blur to the Blur layer.

The blur system will now only blur the elements in the Blur layer.

## Using blur masks

1. Create a new Canvas, call it “Blur Canvas”.
2. Set the Canvas render mode to “Screen Space - Camera”.
3. Set the Plane Distance to something small, like 1, so that the blur objects in the canvas will render in front of scene objects.
4. Create a new Image, Panel, or Raw Image canvas item. Then apply a material using the `GaussianBlurMask` shader to the material slot of that item.
5. we’ve included two helpful utility scripts, Copy Rect Transform and Copy Image, to help you keep the blur object in sync with any panels in the default canvas.

## Understanding blur mask interactions

A blur mask will apply to any object that is rendered behind it.

### Objects affected

- Any objects rendered on a Screen Space - Camera canvas
- Any objects in your scene

### Objects not affected

- Any objects rendered on a Screen Space - Overlay canvas
- Objects that are rendered in front of the Blur Mask (based on Depth Test).

## Controlling the tint and blur radius of blur masks

1. Open the `GaussianBlurMask` material.
2. Adjust the Tint.
3. Adjust the Blur Radius.

## Using blur masks with full screen blurs

The Screen Blur is applied additively to any Blur Canvas items.

### Example Configuration

- Assume that you have a Blur Canvas component with a blur radius of 50px.
- Assume you set the Gaussian Blur override to a blur radius of 50px.

### Results

The blur radius in the Blur Canvas component region will be 50px + 50px = 100px. It will be 50px everywhere else.

## Blurring the entire screen

To blur the entire screen:

1. Create a new Global Volume component.
1. Add the Guassian Blur override.
1. Enable it.
1. Set the radius to some non-zero value.

## Blurring text and UI elements

To blur text and UI elements:

1. Create a Screen Space - Camera canvas.
1. Create a new Raw Image object in this canvas.
1. Apply a Blur Mask material to this object.
1. Create and add text and images to the same canvas.

## Excluding text and UI elements from a UI blur

To prevent text or other UI elements from being blurred, use a Screen Space - Overlay canvas.

1. Create a Screen Space - Camera canvas.
1. Create a new Raw Image object in this canvas.
1. Apply a Blur Mask material to this object.
1. Create a Screen Space - Overlay canvas.
1. Create and add text and images to the Screen Space Overlay canvas.
