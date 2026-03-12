import { h, Fragment, Component } from 'preact';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { debounce } from '@mui/material/utils';
import RotateRight from '@mui/icons-material/RotateRight';
import RotateLeft from '@mui/icons-material/RotateLeft';

import theme from '../styles/theme';
import Gelly from './moji';

const ORIENTATIONS = ['left', 'front', 'right', 'back-right', 'back', 'back-left'];

const menuButtonStyles = {
    color: theme.palette.primary.contrastText,
    fontFamily: `'Grandstander', cursive`,
    fontSize: { xs: '1.6rem', lg: '1.3rem' },
    fontWeight: 'bold',
    textShadow: Array(14).join('#000 0px 0px 2px, ') + '#000 0px 0px 2px'
};

// Scrollbar styles - defined outside component to avoid recreation on each render
const noScrollBarStyle = {
    '&::-webkit-scrollbar': { display: 'none' },
    scrollbarWidth: 'none'
};

const thinScrollBarStyle = {
    '&::-webkit-scrollbar': { width: '4px', height: '4px' }
};

/** @jsx h */
/** @jsxFrag Fragment */

class Customize extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orientation: 'front',
            parts: {},
            component: null
        };

        this.showComponents = this.showComponents.bind(this);
        this.setComponent = this.setComponent.bind(this);
        this.rotateLeft = this.rotateLeft.bind(this);
        this.rotateRight = this.rotateRight.bind(this);
        this.handleResize = debounce(this.handleResize.bind(this), 250);
    }

    handleResize() {
        this.setState({});
    }

    componentDidMount() {
        this.showComponents('body');
        window.addEventListener('resize', this.handleResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    showComponents(component) {
        if (component in this.state.parts) {
            this.setState({ component: component });
        } else {
            import(`../svgs/${component}/index`).then(item => {
                let new_parts = { ...this.state.parts };
                new_parts[component] = { ...item };
                this.setState({ parts: new_parts, component: component });
            });
        }
    }

    setComponent(value) {
        const { gellyConfig, setGellyConfig } = this.props;
        const currentComponent = this.state.component;

        if (gellyConfig[currentComponent] === value) {
            // Deselect
            setGellyConfig({ ...gellyConfig, [currentComponent]: null });
        } else {
            // Select
            setGellyConfig({ ...gellyConfig, [currentComponent]: value });
        }
    }

    rotateLeft() {
        let idx = ORIENTATIONS.indexOf(this.state.orientation);
        if (ORIENTATIONS[idx - 1] === undefined) {
            this.setState({ orientation: ORIENTATIONS[ORIENTATIONS.length - 1] });
        } else {
            this.setState({ orientation: ORIENTATIONS[idx - 1] });
        }
    }

    rotateRight() {
        let idx = ORIENTATIONS.indexOf(this.state.orientation);
        if (ORIENTATIONS[idx + 1] === undefined) {
            this.setState({ orientation: ORIENTATIONS[0] });
        } else {
            this.setState({ orientation: ORIENTATIONS[idx + 1] });
        }
    }

    render() {
        const { gellyConfig } = this.props;
        let vertical = window.innerHeight > window.innerWidth;
        let parts = this.state.parts[this.state.component] || {};
        let selected_part = gellyConfig ? gellyConfig[this.state.component] : null;
        let lg_breakpoint = window.innerWidth > theme.breakpoints.values.lg;

        return (
            <Container style={{ marginTop: '100px', zIndex: 0 }}>
                <Box m={4}>
                    <Grid container spacing={3} alignItems="flex-start">
                        <Grid item xs={vertical ? 12 : 6}>
                            <Box boxShadow={1} style={{ borderRadius: 30, position: 'relative', backgroundColor: theme.palette.secondary.main, maxHeight: vertical ? '85vw' : '85vh', height: vertical ? '85vw' : '85vh' }}>
                                <Gelly
                                    eyes={gellyConfig?.eyes}
                                    mouth={gellyConfig?.mouth}
                                    gradient={gellyConfig?.gradient}
                                    body={gellyConfig?.body}
                                    headwear={gellyConfig?.headwear}
                                    pattern={gellyConfig?.pattern}
                                    orientation={this.state.orientation}
                                />
                                <IconButton onClick={this.rotateLeft} size="large" style={{ bottom: 0, position: 'absolute', left: 0 }}>
                                    <RotateRight style={{ height: '2em', width: '2em' }} />
                                </IconButton>
                                <IconButton onClick={this.rotateRight} size="large" style={{ bottom: 0, position: 'absolute', right: 0 }}>
                                    <RotateLeft style={{ height: '2em', width: '2em' }} />
                                </IconButton>
                            </Box>
                        </Grid>
                        <Grid item xs={vertical ? 12 : 6}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', maxHeight: vertical ? 'auto' : '85vh', height: vertical ? 'auto' : '85vh' }}>
                                <Box
                                    sx={{
                                        ...noScrollBarStyle,
                                        flex: 1,
                                        overflowY: 'auto',
                                        overflowX: vertical ? 'auto' : 'hidden'
                                    }}
                                >
                                    <Grid container spacing={1}>
                                        {Object.keys(parts).map((part) => {
                                            let key = this.state.component + part;
                                            let isSelected = selected_part === part;
                                            let props = { [this.state.component]: part, animations: false };
                                            return (
                                                <Grid item xs={6} key={key}>
                                                    <Box
                                                        onClick={() => this.setComponent(part)}
                                                        boxShadow={1}
                                                        sx={{
                                                            backgroundColor: isSelected ? theme.palette.success.light : theme.palette.secondary.main,
                                                            border: isSelected ? `3px dashed ${theme.palette.tertiary.main}` : 'none',
                                                            borderRadius: '20px',
                                                            aspectRatio: '1',
                                                            cursor: 'pointer'
                                                        }}
                                                    >
                                                        <Gelly {...props} />
                                                    </Box>
                                                </Grid>
                                            );
                                        })}
                                    </Grid>
                                </Box>
                                <Box sx={{ ...thinScrollBarStyle, overflowX: lg_breakpoint ? 'visible' : 'auto', flexShrink: 0, mt: 1 }}>
                                    <ButtonGroup fullWidth={lg_breakpoint} variant="contained" color="primary">
                                        <Button sx={{ ...menuButtonStyles, textDecoration: this.state.component === 'body' ? 'underline' : 'none' }} size="large" onClick={() => this.showComponents('body')}>Body</Button>
                                        <Button sx={{ ...menuButtonStyles, textDecoration: this.state.component === 'eyes' ? 'underline' : 'none' }} size="large" onClick={() => this.showComponents('eyes')}>Eyes</Button>
                                        <Button sx={{ ...menuButtonStyles, textDecoration: this.state.component === 'mouth' ? 'underline' : 'none' }} size="large" onClick={() => this.showComponents('mouth')}>Mouth</Button>
                                        <Button sx={{ ...menuButtonStyles, textDecoration: this.state.component === 'pattern' ? 'underline' : 'none' }} size="large" onClick={() => this.showComponents('pattern')}>Pattern</Button>
                                        <Button sx={{ ...menuButtonStyles, textDecoration: this.state.component === 'headwear' ? 'underline' : 'none' }} size="large" onClick={() => this.showComponents('headwear')}>Headwear</Button>
                                        <Button sx={{ ...menuButtonStyles, textDecoration: this.state.component === 'gradient' ? 'underline' : 'none' }} size="large" onClick={() => this.showComponents('gradient')}>Color</Button>
                                    </ButtonGroup>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        );
    }
}

export default Customize;
