import React from "react";
import { Button, VStack, Text, HStack, useTheme, Box } from "@chakra-ui/react";

interface TextBaseProps {
  title: string;
  description: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryButtonClick?: () => void;
  onSecondaryButtonClick?: () => void;
}

const TextBase: React.FC<TextBaseProps> = ({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryButtonClick,
  onSecondaryButtonClick,
}) => {
  const theme = useTheme();
  return (
    <VStack
      spacing={4}
      align="stretch"
      borderWidth="1px"
      borderRadius="md"
      p={4}
    >
      <Text fontSize="xl" fontWeight="bold">
        {title}
      </Text>
      <Box
        width={1 / 4}
        borderBottom="3px solid"
        borderBottomColor={theme.colors.primary[500]}
      ></Box>
      <Text>{description}</Text>
      <HStack gap={20}>
        {primaryButtonText && onPrimaryButtonClick && (
          <Button onClick={onPrimaryButtonClick}>{primaryButtonText}</Button>
        )}
        {secondaryButtonText && onSecondaryButtonClick && (
          <Button variant="outline" onClick={onSecondaryButtonClick}>
            {secondaryButtonText}
          </Button>
        )}
      </HStack>
    </VStack>
  );
};

export default TextBase;
