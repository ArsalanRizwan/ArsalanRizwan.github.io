/**
 * THE LAB — experiments, prototypes and technical explorations.
 * Add an entry to this array; the Lab page and homepage preview update automatically.
 * All entries come from local Unity projects or public GitHub repositories.
 */
import type { LabEntry } from './types';

export const lab: LabEntry[] = [
  { id: 'manhattan', title: 'Procedural Manhattan', kind: 'Procedural generation', summary: 'Rebuilding a real city from geographic data in HDRP — a Python pipeline feeding a Unity tile builder.', tags: ['Unity 6', 'HDRP', 'Python'], project: 'procedural-manhattan', source: 'Local project' },
  { id: 'convai', title: 'Talking to NPCs in VR', kind: 'AI characters', summary: 'Voice conversations with Convai-driven characters inside a VR scene.', tags: ['Convai', 'OpenXR', 'XRI'], project: 'convai-vr-characters', source: 'Local project' },
  { id: 'geospatial', title: 'Geospatial AR anchors', kind: 'Location-based AR', summary: 'Placing content at real-world coordinates with Google’s ARCore Geospatial API.', tags: ['ARCore Extensions', 'Geospatial API'], source: 'Local project' },
  { id: 'lightship', title: 'Lightship Maps', kind: 'Location-based AR', summary: 'Experiments with Niantic Lightship Maps — custom feature labels and orthographic map cameras.', tags: ['Niantic Lightship', 'Maps'], source: 'Local project' },
  { id: 'portal', title: 'AR portals & portal shaders', kind: 'Rendering', summary: 'A walk-through AR portal into an art gallery, plus a stencil-based portal shader test bed.', tags: ['AR Foundation', 'Shaders'], source: 'Local project' },
  { id: 'superhero', title: 'VR Superhero locomotion', kind: 'VR interaction', summary: 'Prototyping swinging and Iron-Man-style flight as VR locomotion.', tags: ['Oculus', 'Locomotion'], source: 'Local project' },
  { id: 'torch', title: 'Torch signalling & burn marks', kind: 'VR interaction', summary: 'Drawing on walls with fire — burn marks, erasing and a torch-signalling interaction.', tags: ['OpenXR', 'Interaction'], source: 'Local project' },
  { id: 'speech', title: 'On-device speech recognition', kind: 'Speech', summary: 'Mobile speech-to-text prototypes using native Android speech plugins from Unity.', tags: ['Android', 'Speech-to-text'], source: 'Local projects' },
  { id: 'runtime-models', title: 'Runtime avatar & model loading', kind: 'Pipelines', summary: 'Downloading and instancing glTF models and avatars at runtime.', tags: ['glTF', 'Runtime loading'], source: 'Local projects' },
  { id: 'ultimatexr', title: 'UltimateXR evaluation', kind: 'XR frameworks', summary: 'Trying the UltimateXR framework on OpenXR in Unity 2022.3.', tags: ['OpenXR', 'UltimateXR'], source: 'Local project' },
  { id: 'storyboard', title: 'VR storyboard classroom', kind: 'Prototype', summary: 'Using a VR classroom as a space to storyboard experiences.', tags: ['XRI', 'Oculus'], source: 'Local project' },
  { id: 'mini-games', title: 'Hyper-casual mini games', kind: 'Game prototypes', summary: 'Branch Game, Bridge Race, Witchy Delivery Service and a save/load system — quick loops to test feel and monetisation.', tags: ['Unity', 'Mobile'], source: 'Local projects' },
  { id: 'java-browser', title: 'Java Swing browser', kind: 'Software', summary: 'An implementation of a web browser using Java Swing — alongside a Java calculator and other early repositories.', tags: ['Java', 'Swing'], link: { label: 'GitHub', href: 'https://github.com/ArsalanRizwan/Browser' }, source: 'GitHub' },
];
