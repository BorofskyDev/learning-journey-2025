import { FormEvent, useRef } from 'react'

interface NewGoalProps {
  onAdd: (text: string, summary: string) => void
}
export default function NewGoal({ onAdd }: NewGoalProps) {
  const goalRef = useRef<HTMLInputElement>(null)
  const summaryRef = useRef<HTMLInputElement>(null)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const enteredGoal = goalRef.current!.value
    const enteredSummary = summaryRef.current!.value

    // validation...
    onAdd(enteredGoal, enteredSummary)
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor='goal'>Your Goal</label>
        <input type='text' name='goal' ref={goalRef} />
      </p>
      <p>
        <label htmlFor='summary'>Short Summary</label>
        <input type='text' name='summary' ref={summaryRef} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  )
}
