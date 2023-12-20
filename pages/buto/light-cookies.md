
# Light Cookies

## Overview
A light cookie is a mask texture that you place on a Light to create shadows with specific shapes or colors.

:::info Light Cookie Compatibility
- ✅ Directional Lights
- ❌ Additional Lights
:::

## Understanding Light Cookie Types
Light cookies can be defined as one of three types based on your Light Cookie settings in Unity. The three types include RGB, RGBA, and Single Channel (R|A) type light cookies.

Buto supports light cookies in each of these three types, but it handles the rendering for each of these light cookie types differently.

This conditional handling gives you control over how you want light cookies to affect Buto fog in your scene.

## Choosing the Right Type of Light Cookie

### RGB Light Cookies
RGB light cookies only have data in the Red, Green, and Blue color channels.

Buto treats RGB light cookies as color only. RGB light cookies will affect the color of the Buto fog, but will not affect any shadowing term.

### RGBA Light Cookies
RGBA light cookies have data in the Red, Green, Blue, and Alpha channels.

Buto treats RGBA light cookies as mixed-usage. The RGB channels affect the color only. However, the A channel will affect the shadowing term.

### Single Channel (R|A) Light Cookies
Single Channel light cookies have data in either the red channel or alpha channel of the source texture.

Buto treats these light cookies as colorless. The intensity of the color in the single channel affects the shadowing term only.

## Using Buto with Additional Light Cookies

