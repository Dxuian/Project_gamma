export default function Loading() {
  return (
    <div className="fixed inset-0 w-screen h-screen bg-background flex items-center justify-center z-50">
      <div className="loading loading-infinity loading-lg"></div>
    </div>
  )
}
