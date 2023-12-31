import { HeaderBar } from '@/components/HeaderBar/HeaderBar'
import Sheet from '@mui/joy/Sheet'
import Stack from '@mui/joy/Stack'

export default async function Dashboard() {
  return (
    <>
      <HeaderBar />
      <Sheet>
        <Stack sx={{ p: 8 }}>
          <h1>Dashboard</h1>
          <p>Welcome to the dashboard!</p>
        </Stack>
      </Sheet>
    </>
  )
}
