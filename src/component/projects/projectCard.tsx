import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const ProjectCard = () => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        background: 'linear-gradient(145deg, #0E021D, #1C1033)',
      }}
    >
      <CardActionArea>
        <CardMedia
          sx={{ height: 200 }}
          component="img"
          height="50px"
          image="data:image/jpeg;base64,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"
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="text.primary"
          >
            Project name
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Github client side
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Github server side
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Live link
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          sx={{
            backgroundColor: 'primary.main',
            color: 'text.primary',
            fontWeight: 600,
            px: '20px',
          }}
        >
          Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
