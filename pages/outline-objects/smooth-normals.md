# Smooth Normals

Outline Objects uses the mesh's normal vectors to extrude the outline away from the mesh. Some meshes use hard edges, which can result in visible seams when used as a source mesh for the outlines. Outline Objects includes a normal smoothing system that makes it easy to use these meshes with the outline shader.

You have two options to configure a mesh to use smooth normals: An editor tool or a component.

![smooth normal comparison](/img/outline-objects/smooth-normals.png)

## Generating Smooth Normals

### Component (Recommended)

1. Click on the game object in your hierarchy. Click Add Component -> OccaSoftware -> Outline Objects -> Smooth Normals.
1. When this component is on a game object, it will automatically create a new mesh and bake smooth normals onto that mesh.

### Editor Tool (Advanced)

To create smooth normal vectors for your mesh, you can use the included tool. In your toolbar, click on Tools -> Generate Smooth Normals. This will open a pop-up window in the editor. Then, drop in the mesh you want to generate smooth normals for. Finally, click "Bake".

Outline Objects is non-destructive to your mesh's normal vectors. It does NOT override the normal vectors for your mesh. Instead, it uses the UV3 channel to record the smooth normal information for the mesh.

## Use Smooth Normal Vectors

Because the Smooth Normals process is non-destructive and creates a new mesh channel, you need to tell the shader to use the new mesh channel data instead of the default normal channel.

It is easy to set this up.

Navigate to the mesh with smooth normal vectors, then open the outline material on that mesh. In the outline material inspector settings, enable "Use Smoothed Normals". The material will now use the data in the UV3 channel of the mesh. If you already baked the smooth normal data, this will include the smooth normal data from the baker utility.

## Validate Smooth Normal Vectors

Check the Mesh Vertices data. It should have a UV3 channel with a float3 array.

## Troubleshoot

- Re-generate the smooth normals for the mesh using the baker utility.
- Make sure that you are using the same mesh for the baker utility and the material.
- Make sure that your material has "Use Smooth Normals" enabled.
