

const fireworksContainer = document.querySelector(".fireworks-container")
  , versionContainer = document.querySelector(".container > span")
  , fireworksConfig = {
    hue: {
        min: 0,
        max: 345
    },
    delay: {
        min: 15,
        max: 15
    },
    rocketsPoint: 50,
    speed: 10,
    acceleration: 1.2,
    friction: .96,
    gravity: 1,
    particles: 90,
    trace: 3,
    explosion: 6,
    autoresize: !0,
    brightness: {
        min: 50,
        max: 80,
        decay: {
            min: .015,
            max: .03
        }
    },
    boundaries: {
        x: 50,
        y: 50,
        width: fireworksContainer.clientWidth,
        height: fireworksContainer.clientHeight,
        visible: !1
    },
    sound: {
        enable: !1,
        files: [document.location.origin + document.location.pathname + "sounds/explosion0.mp3", document.location.origin + document.location.pathname + "sounds/explosion1.mp3", document.location.origin + document.location.pathname + "sounds/explosion2.mp3"],
        volume: {
            min: 4,
            max: 8
        }
    },
    mouse: {
        click: !0,
        move: !1,
        max: 3
    }
}
  , backgroundConfig = {
    backgroundColor: "#000000",
    backgroundImage: "",
    backgroundSize: "cover",
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
    container: !1,
    fps: !1
};
if (document.addEventListener("keydown", (e=>{
    "F11" === e.code && (e.preventDefault(),
    fireworksContainer.requestFullscreen ? fireworksContainer.requestFullscreen() : fireworksContainer.webkitRequestFullscreen && fireworksContainer.webkitRequestFullscreen())
}
)),
document.location.hash)
    try {
        const e = b64DecodeUnicode(document.location.hash.slice(1)).split(",").map(Number).filter((e=>"number" == typeof e));
        15 === e.length && (fireworksConfig.hue.min = e[0],
        fireworksConfig.hue.max = e[1],
        fireworksConfig.delay.min = e[2],
        fireworksConfig.delay.max = e[3],
        fireworksConfig.brightness.min = e[4],
        fireworksConfig.brightness.max = e[5],
        fireworksConfig.brightness.decay.min = e[6],
        fireworksConfig.brightness.decay.max = e[7],
        fireworksConfig.speed = e[8],
        fireworksConfig.acceleration = e[9],
        fireworksConfig.friction = e[10],
        fireworksConfig.gravity = e[11],
        fireworksConfig.particles = e[12],
        fireworksConfig.trace = e[13],
        fireworksConfig.explosion = e[14])
    } catch (e) {
        document.location.hash = "",
        console.log(e)
    }
const fireworks = new Fireworks(fireworksContainer,fireworksConfig);
fireworks.start(),
versionContainer.textContent = "v" + fireworks.version;
let update, stats, count_fireworks = document.querySelector(".count-fireworks"), count_particles = document.querySelector(".count-particles");
stats = new Stats,
stats.setMode(0),
stats.domElement.style.position = "fixed",
stats.domElement.style.left = "5px",
stats.domElement.style.top = "5px",
stats.domElement.id = "stats",
document.body.appendChild(stats.domElement),
update = function() {
    stats.begin(),
    stats.end(),
    count_fireworks.textContent = fireworks._traces.length,
    count_particles.textContent = fireworks._explosions.length,
    requestAnimationFrame(update)
}
,
requestAnimationFrame(update);
const fpsMonitor = document.querySelector("#stats")
  , fireworksCounters = document.querySelector(".fireworks-counters")
  , container = document.querySelector(".container")
  , gui = new dat.GUI({
    width: 300
});
function b64EncodeUnicode(e) {
    return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, (function(e, o) {
        return String.fromCharCode("0x" + o)
    }
    )))
}
function b64DecodeUnicode(e) {
    return decodeURIComponent(atob(e).split("").map((e=>"%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2))).join(""))
}
window.export = ()=>{
    let e = new Blob([JSON.stringify(fireworksConfig, void 0, 4)],{
        type: "text/plain"
    })
      , o = document.createElement("a");
    Object.assign(o, {
        href: URL.createObjectURL(e),
        download: "fireworks-config.json"
    }),
    o.click(),
    o.remove()
}
,
window.share = ()=>{
    const e = Object.values(fireworksConfig).map(((e,o)=>{
        switch (o) {
        case 0:
        case 1:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
            break;
        default:
            return e
        }
    }
    )).filter((e=>void 0 !== e));
    document.location.hash = "#" + b64EncodeUnicode([fireworksConfig.hue.min, fireworksConfig.hue.max, fireworksConfig.delay.min, fireworksConfig.delay.max, fireworksConfig.brightness.min, fireworksConfig.brightness.max, fireworksConfig.brightness.decay.min, fireworksConfig.brightness.decay.max, ...e]);
    const o = document.createElement("input");
    document.body.appendChild(o),
    o.value = document.location.href,
    o.select(),
    document.execCommand("copy"),
    document.body.removeChild(o)
}
;
const folders = {
    fireworks: gui.addFolder("fireworks"),
    boundaries: gui.addFolder("boundaries"),
    sound: gui.addFolder("sound"),
    mouse: gui.addFolder("mouse"),
    background: gui.addFolder("background")
};
folders.fireworks.addFolder("hue"),
folders.fireworks.__folders.hue.add(fireworksConfig.hue, "min", 0, 360).step(1).onChange((e=>{
    fireworks._hue.min = e
}
)),
folders.fireworks.__folders.hue.add(fireworksConfig.hue, "max", 0, 360).step(1).onChange((e=>{
    fireworks._hue.max = e
}
)),
folders.fireworks.addFolder("delay"),
folders.fireworks.__folders.delay.add(fireworksConfig.delay, "min", 1, 100).step(1).onChange((e=>{
    fireworks._delay.min = e
}
)),
folders.fireworks.__folders.delay.add(fireworksConfig.delay, "max", 1, 100).step(1).onChange((e=>{
    fireworks._delay.max = e
}
)),
folders.fireworks.addFolder("brightness"),
folders.fireworks.__folders.brightness.add(fireworksConfig.brightness, "min", 1, 100).step(1).onChange((e=>{
    fireworks._brightness.min = e
}
)),
folders.fireworks.__folders.brightness.add(fireworksConfig.brightness, "max", 1, 100).step(1).onChange((e=>{
    fireworks._brightness.max = e
}
)),
folders.fireworks.__folders.brightness.addFolder("decay"),
folders.fireworks.__folders.brightness.__folders.decay.add(fireworksConfig.brightness.decay, "min", .001, .05).step(.001).onChange((e=>{
    fireworks._brightness.decay.min = e
}
)),
folders.fireworks.__folders.brightness.__folders.decay.add(fireworksConfig.brightness.decay, "max", .001, .05).step(.001).onChange((e=>{
    fireworks._brightness.decay.max = e
}
)),
folders.fireworks.add(fireworksConfig, "rocketsPoint", 0, 100).step(1).onChange((e=>{
    fireworks._rocketsPoint = e
}
)),
folders.fireworks.add(fireworksConfig, "speed", 1, 100).step(1).onChange((e=>{
    fireworks._speed = e
}
)),
folders.fireworks.add(fireworksConfig, "acceleration", 1, 10).step(.1).onChange((e=>{
    fireworks._acceleration = e
}
)),
folders.fireworks.add(fireworksConfig, "friction", .5, 3).step(.01).onChange((e=>{
    fireworks._friction = e
}
)),
folders.fireworks.add(fireworksConfig, "gravity", .1, 10).step(.1).onChange((e=>{
    fireworks._gravity = e
}
)),
folders.fireworks.add(fireworksConfig, "particles", 1, 1e3).step(1).onChange((e=>{
    fireworks._particleCount = e
}
)),
folders.fireworks.add(fireworksConfig, "trace", 1, 10).step(1).onChange((e=>{
    fireworks._traceLength = e
}
)),
folders.fireworks.add(fireworksConfig, "explosion", 1, 10).step(1).onChange((e=>{
    fireworks._explosionLength = e
}
)),
folders.fireworks.add(fireworks, "_randomRocketsPoint", !1).name("random start position").onChange((e=>{
    fireworks._randomRocketsPoint = e
}
)),
folders.fireworks.add(fireworks, "_running", !0).name("enable").onChange((()=>{
    fireworks.render()
}
)),
folders.fireworks.add(window, "export").name("export config (download json)"),
folders.fireworks.add(window, "share").name("share config (copy url)"),
folders.boundaries.add(fireworksConfig.boundaries, "visible").onChange((e=>{
    fireworks._visibleBoundaries = e
}
)),
folders.boundaries.add(fireworksConfig.boundaries, "x").step(1).onChange((e=>{
    fireworks._boundaries.x = e
}
)),
folders.boundaries.add(fireworksConfig.boundaries, "y").step(1).onChange((e=>{
    fireworks._boundaries.y = e
}
)),
folders.boundaries.add(fireworksConfig.boundaries, "width").step(1).onChange((e=>{
    fireworks._boundaries.width = e
}
)),
folders.boundaries.add(fireworksConfig.boundaries, "height").step(1).onChange((e=>{
    fireworks._boundaries.height = e
}
)),
folders.sound.addFolder("volume"),
folders.sound.__folders.volume.add(fireworksConfig.sound.volume, "min", 1, 100).step(1).onChange((e=>{
    fireworks._sound.options.volume.min = e
}
)),
folders.sound.__folders.volume.add(fireworksConfig.sound.volume, "max", 1, 100).step(1).onChange((e=>{
    fireworks._sound.options.volume.max = e
}
)),
folders.sound.add(fireworksConfig.sound, "enable", !1).onChange((e=>{
    fireworks._sound.options.enable = e
}
)),
folders.mouse.addFolder("click"),
folders.mouse.__folders.click.add(fireworksConfig.mouse, "click", !0).onChange((e=>{
    fireworks._mouse.click = e
}
)),
folders.mouse.__folders.click.add(fireworksConfig.mouse, "max", 1, 10).step(1).onChange((e=>{
    fireworks._mouse.max = e
}
)),
folders.mouse.add(fireworksConfig.mouse, "move", !1).onChange((e=>{
    fireworks._mouse.move = e
}
)),
folders.background.addColor(backgroundConfig, "backgroundColor").name("background-color").onChange((e=>{
    fireworksContainer.style.backgroundColor = e
}
)),
folders.background.add(backgroundConfig, "backgroundImage").name("background-image").onChange((e=>{
    fireworksContainer.style.backgroundImage = `url(${e})`
}
)),
folders.background.add(backgroundConfig, "backgroundSize").name("background-size").onChange((e=>{
    fireworksContainer.style.backgroundSize = e
}
)),
folders.background.add(backgroundConfig, "backgroundPosition").name("background-position").onChange((e=>{
    fireworksContainer.style.backgroundPosition = e
}
)),
folders.background.add(backgroundConfig, "backgroundRepeat").name("background-repeat").onChange((e=>{
    fireworksContainer.style.backgroundRepeat = e
}
)),
folders.background.add(backgroundConfig, "fps").name("hide fps").onChange((e=>{
    e ? (fpsMonitor.style.display = "none",
    fireworksCounters.style.display = "none") : (fpsMonitor.style.display = "block",
    fireworksCounters.style.display = "block")
}
)),
folders.background.add(backgroundConfig, "container").name("hide card").onChange((e=>{
    container.style.display = e ? "none" : "block"
}
));
