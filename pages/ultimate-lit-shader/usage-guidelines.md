
# Usage Guidelines

The Ultimate Lit Shader is a powerful tool for enhancing the visual quality of your Unity Universal Render Pipeline (URP) projects. To make the most of this shader, it's essential to follow some usage guidelines. This document will provide you with best practices and recommendations for using the Ultimate Lit Shader effectively.

## General Guidelines

Use [Physically Based](https://physicallybased.info/) as a reference guide for PBR material values.

### Base Color

- **For Non-Metals**: The Base Color should typically be constrained to the following RGB range: [0.15, 0.94] (RGB 0 - 1.0) or [40, 240] (RGB 0 - 255). This range ensures your material looks realistic and adheres to physical properties.
- **For Metals**: If you're working with metallic materials, the Base Color should typically be within the RGB range of [0.5, 1.0] (RGB 0 - 1.0) or [127, 255] (RGB 0 - 255). Metal materials should have a higher reflectance, and this range reflects that.

### Metalness

- **Binary Option**: Treat Metalness as a binary option. A material is either non-metal or metal. There should be no partially metal materials. Use Metalness maps to blend between 0 and 1 to represent subpixel detail or to blend between types of materials at material boundaries.

### Specularity

- **Specularity Range**: The Specularity property is scaled from [0, 1], representing specularity to [0, 0.08], representing reflectance to match real-world values. Real-world values rarely go below 2% reflectance; therefore, your specularity should typically never be set below 0.25.
- **Non-Metals**: For non-metallic materials, Specularity should typically be set to 0.5. This range corresponds roughly to an Index of Refraction range of [1.0, 1.8].
- **Metals**: For metallic materials, Specularity is not used directly. Instead, specularity is set directly from the Base Color of the metal.

### Roughness

- **Smoothness**: Roughness represents the perceived smoothness or roughness of the material. A perfectly smooth material will have a roughness of 0, while a perfectly rough material will have a roughness of 1.

## Applying the Guidelines

To apply these guidelines effectively:

1. Select your material in Unity's Inspector.
2. Adjust the shader properties following the recommendations above.

Remember that these guidelines are based on physical properties to achieve realistic results. However, artistic considerations may require deviations from these recommendations. Always balance technical accuracy with the visual style you aim to achieve.

## Experiment and Iterate

Don't hesitate to experiment and iterate with the Ultimate Lit Shader. It offers a wide range of customization options, allowing you to achieve the exact look you want for your materials. Don't be afraid to push the boundaries and explore the shader's capabilities to create stunning visuals in your URP projects.

By following these usage guidelines and experimenting creatively, you'll be well on your way to leveraging the full potential of the Ultimate Lit Shader and enhancing the visual quality of your Unity projects.
