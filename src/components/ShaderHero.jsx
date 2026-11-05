import { useEffect, useRef } from 'react'

const vertexShader = `attribute vec2 a_position; varying vec2 v_texCoord; void main() { v_texCoord = a_position * 0.5 + 0.5; gl_Position = vec4(a_position, 0.0, 1.0); }`
const fragmentShader = `precision highp float; uniform float u_time; uniform vec2 u_resolution; void main() { vec2 uv = gl_FragCoord.xy / u_resolution.xy; float time = u_time * 0.2; vec3 color1 = vec3(0.537, 0.275, 0.937); vec3 color2 = vec3(0.851, 0.275, 0.937); vec3 color3 = vec3(0.043, 0.075, 0.150); float noise = sin(uv.x * 3.0 + time) * cos(uv.y * 2.0 - time); noise += sin(uv.y * 4.0 + time * 1.5) * cos(uv.x * 3.0 - time * 0.5); vec3 finalColor = mix(color3, color1, clamp(noise + uv.y * 0.5, 0.0, 1.0)); finalColor = mix(finalColor, color2, clamp(sin(uv.x * 2.0 + time) * 0.5 + 0.5, 0.0, 1.0) * 0.3); gl_FragColor = vec4(finalColor, 1.0); }`

export default function ShaderHero() {
  const canvasRef = useRef(null)
  const typingRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    function syncSize() {
      const w = canvas.clientWidth || 1280
      const h = canvas.clientHeight || 720
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w
        canvas.height = h
      }
    }

    if (typeof ResizeObserver !== 'undefined') new ResizeObserver(syncSize).observe(canvas)
    syncSize()

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    if (!gl) return

    function compile(type, source) {
      const shader = gl.createShader(type)
      gl.shaderSource(shader, source)
      gl.compileShader(shader)
      return shader
    }

    const program = gl.createProgram()
    gl.attachShader(program, compile(gl.VERTEX_SHADER, vertexShader))
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fragmentShader))
    gl.linkProgram(program)
    gl.useProgram(program)

    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW)

    const position = gl.getAttribLocation(program, 'a_position')
    gl.enableVertexAttribArray(position)
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0)

    const uTime = gl.getUniformLocation(program, 'u_time')
    const uResolution = gl.getUniformLocation(program, 'u_resolution')

    let animationId
    function render(time) {
      if (typeof ResizeObserver === 'undefined') syncSize()
      gl.viewport(0, 0, canvas.width, canvas.height)
      if (uTime) gl.uniform1f(uTime, time * 0.001)
      if (uResolution) gl.uniform2f(uResolution, canvas.width, canvas.height)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
      if (!reduceMotion) animationId = requestAnimationFrame(render)
    }
    render(0)

    return () => cancelAnimationFrame(animationId)
  }, [])

  useEffect(() => {
    const text = 'Software Engineer'
    const container = typingRef.current
    if (!container) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      container.textContent = text
      return
    }

    let index = 0
    let timeoutId

    function type() {
      if (index < text.length) {
        container.textContent += text.charAt(index)
        index += 1
        timeoutId = setTimeout(type, 100)
      } else {
        container.classList.remove('typing-cursor')
      }
    }

    const startTimeout = setTimeout(() => {
      container.textContent = ''
      container.classList.add('typing-cursor')
      type()
    }, 800)

    return () => {
      clearTimeout(startTimeout)
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <section
      id="home"
      className="relative z-10 flex min-h-[100svh] w-full items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-40" aria-hidden="true">
        <canvas ref={canvasRef} className="block h-full w-full" />
      </div>

      <div className="relative z-20 mx-auto flex max-w-container-max flex-col items-center justify-center px-margin-x text-center">
        <div className="animate-fade-in-up mb-stack-md" style={{ animationDelay: '0.1s' }}>
          <div className="group relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-secondary opacity-25 blur transition duration-1000 group-hover:opacity-60" />
            <div className="glass-card relative h-40 w-40 overflow-hidden rounded-full border-4 border-white/10 md:h-56 md:w-56">
              <img
                src="/imen.webp"
                alt="Imen Bouchriha"
                width="400"
                height="400"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="animate-fade-in-up max-w-3xl" style={{ animationDelay: '0.3s' }}>
          <h1 className="mb-4 font-display text-display-mobile text-on-surface md:text-display">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Imen Bouchriha
            </span>
          </h1>
          <h2
            ref={typingRef}
            id="typing-subtext"
            className="typing-cursor mb-6 min-h-[1.4em] font-headline-sm text-headline-sm text-primary/80"
          />
          <p className="mx-auto mb-10 max-w-xl font-body-lg text-body-lg text-on-surface-variant">
            Building digital experiences with precision, playfulness, and high-performance code.
          </p>

          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <a
              href="#projects"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-secondary px-8 py-4 shadow-xl shadow-primary/10 transition-transform duration-300 hover:scale-105"
            >
              <span className="relative z-10 font-label-caps text-label-caps font-bold text-on-primary-container">
                View Projects
              </span>
              <div className="absolute inset-0 translate-x-[-100%] bg-white/20 transition-transform duration-700 group-hover:translate-x-[100%]" />
            </a>
            <a
              href="#contact"
              className="glass-card glass-glow rounded-full border border-white/10 px-8 py-4 font-label-caps text-label-caps font-bold text-on-surface transition-all duration-300 hover:text-primary"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50 transition-opacity hover:opacity-100"
      >
        <span className="material-symbols-outlined text-4xl text-primary">expand_more</span>
      </a>
    </section>
  )
}
