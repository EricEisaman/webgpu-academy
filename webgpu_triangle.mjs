// Get the canvas and initialize WebGPU
const canvas = document.querySelector("#canvas");
const adapter = await navigator.gpu.requestAdapter();
const device = await adapter.requestDevice();
const context = canvas.getContext("webgpu");

// Setup render outputs
var swapChainFormat = "bgra8unorm";
var configuration = {
 device: device,
 format: swapChainFormat,
 usage: GPUTextureUsage.RENDER_ATTACHMENT,
};
await context.configure(configuration);

// Specify vertex data
var dataBuf = device.createBuffer({
  size: 3 * 2 * 4 * 4,
  usage: GPUBufferUsage.VERTEX,
  mappedAtCreation: true,
});

new Float32Array(dataBuf.getMappedRange()).set([
  1,
  -1,
  0,
  1, // position
  1,
  0,
  0,
  1, // color
  -1,
  -1,
  0,
  1, // position
  0,
  1,
  0,
  1, // color
  0,
  1,
  0,
  1, // position
  0,
  0,
  1,
  1, // color
]);
dataBuf.unmap();

// Setup render outputs
var swapChainFormat = "bgra8unorm";
context.configure({
  device: device,
  format: swapChainFormat,
  usage: GPUTextureUsage.RENDER_ATTACHMENT,
});

// Create shader modules
const shaderCode = `
struct VertexOut {
    @builtin(position) position: vec4<f32>,
    @location(0) color: vec4<f32>,
}

@vertex
fn vertex_main(@location(0) position: vec4<f32>,
               @location(1) color: vec4<f32>) -> VertexOut
{
 var output : VertexOut;
 output.position = position;
 output.color = color;
 return output;
}

@fragment
fn fragment_main(fragData: VertexOut) -> @location(0) vec4<f32>
{
 return fragData.color;
}
`;

const shaderModule = device.createShaderModule({
  code: shaderCode,
});

// Create render pipeline
const pipeline = device.createRenderPipeline({
 layout: "auto", // Add this line
 vertex: {
   module: shaderModule,
   entryPoint: "vertex_main",
   buffers: [
     {
       attributes: [
         { shaderLocation: 0, offset: 0, format: "float32x4" },
         { shaderLocation: 1, offset: 16, format: "float32x4" },
       ],
       arrayStride: 32,
       stepMode: "vertex",
     },
   ],
 },
 fragment: {
   module: shaderModule,
   entryPoint: "fragment_main",
   targets: [
     {
       format: swapChainFormat,
     },
   ],
 },
 primitive: {
   topology: "triangle-list",
 },
});


// Render loop
var frame = function () {
  const commandEncoder = device.createCommandEncoder();
  const renderPass = commandEncoder.beginRenderPass({
    colorAttachments: [
      {
        view: context.getCurrentTexture().createView(),
        clearValue: { r: 0.0, g: 0.0, b: 0.0, a: 1.0 },
        loadOp: "clear",
        storeOp: "store",
      },
    ],
  });

  renderPass.setPipeline(pipeline);
  renderPass.setVertexBuffer(0, dataBuf);
  renderPass.draw(3, 1, 0, 0);
  renderPass.end();

  device.queue.submit([commandEncoder.finish()]);
  requestAnimationFrame(frame);
};
requestAnimationFrame(frame);
