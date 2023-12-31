import Card from '@mui/joy/Card'
import CardContent from '@mui/joy/CardContent'
import CardOverflow from '@mui/joy/CardOverflow'
import Typography from '@mui/joy/Typography'

type SimpleCardProps = {
  cardTitle: string
  cardContent: string
  arialLabelDescription: string
}

export function SimpleCard({
  cardTitle,
  cardContent,
  arialLabelDescription,
}: SimpleCardProps) {
  return (
    <Card
      sx={{
        width: 320,
        zIndex: 0,
        background: 'var(--joy-palette-common-white)',
      }}
    >
      <CardOverflow>
        <Typography level="h3" sx={{ fontWeight: 700 }}>
          {cardTitle}
        </Typography>
      </CardOverflow>
      <CardContent>{cardContent}</CardContent>
    </Card>
  )
}
