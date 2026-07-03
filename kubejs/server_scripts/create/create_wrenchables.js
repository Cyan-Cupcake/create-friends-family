ServerEvents.tags("block", (event) => {
  const wrenchPickupBlocks = [
    // Vanilla redstone blocks
    "minecraft:dispenser",
    "minecraft:dropper",
    "minecraft:redstone_block",
    "minecraft:lightning_rod",

    // All copper bulb blocks
    /^minecraft:.*_bulb$/,

    // Doors
    /^.*_door$/,
    /^.*_trapdoor$/,
    /^.*_fence_gate$/,

    // Storage blocks
    "minecraft:chest",
    "minecraft:trapped_chest",
    "minecraft:ender_chest",
    "minecraft:barrel",

    // Regex for _chest from minecraft (copper chests etc)
    /^minecraft:.*_chest$/,
    "@sophisticatedstorage",

    // Misc
    "#create:seats",
    "#c:chains",
  ];

  event.add("create:wrench_pickup", wrenchPickupBlocks);
});
