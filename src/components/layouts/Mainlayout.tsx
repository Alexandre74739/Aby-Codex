import { useEffect, useRef } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import './Mainlayout.css'

export default function MainLayout() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorRingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const ring = cursorRingRef.current
    if (!cursor || !ring) return

    let raf: number
    let ringX = 0, ringY = 0
    let mouseX = 0, mouseY = 0

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      cursor.style.left = `${mouseX}px`
      cursor.style.top = `${mouseY}px`
    }

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.left = `${ringX}px`
      ring.style.top = `${ringY}px`
      raf = requestAnimationFrame(animateRing)
    }

    const onHoverEnter = () => {
      cursor.classList.add('hovering')
      ring.classList.add('hovering')
    }
    const onHoverLeave = () => {
      cursor.classList.remove('hovering')
      ring.classList.remove('hovering')
    }

    window.addEventListener('mousemove', onMouseMove)
    raf = requestAnimationFrame(animateRing)

    const interactibles = document.querySelectorAll('a, button, [data-hover]')
    interactibles.forEach(el => {
      el.addEventListener('mouseenter', onHoverEnter)
      el.addEventListener('mouseleave', onHoverLeave)
    })

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      {/* Custom cursor */}
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={cursorRingRef} />

      <Navbar />

      <main className="main-content">
        <Outlet />
      </main>

      <Footer />
    </>
  )
}