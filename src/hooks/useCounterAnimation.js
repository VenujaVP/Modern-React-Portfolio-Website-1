import { useEffect } from 'react'

export function useCounterAnimation() {
  useEffect(() => {
    const counters = document.querySelectorAll('.counter-number')
    
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'))
      const duration = parseInt(counter.getAttribute('data-duration'))
      const increment = target / (duration / 16) // 60 FPS
      let current = 0
      
      const updateCounter = () => {
        if (current < target) {
          current += increment
          counter.textContent = Math.round(current)
          requestAnimationFrame(updateCounter)
        } else {
          counter.textContent = target
        }
      }
      
      updateCounter()
    })
  }, [])
} 