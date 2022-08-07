import { Button } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ToogleColorMode = () => {
    const { colorMode, toogleColorMode } = useColorMode();

    return (
        <Button
            onClick={() => toogleColorMode()}
            pos="absolute"
            top={0}
            right={0}
            m="1rem"
        >
            {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        </Button>
    )
};

export default ToogleColorMode;