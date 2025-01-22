import ImageColors from 'react-native-image-colors';

const getDominantColor = async (imagePath: string) => {
  try {
    const result = await ImageColors.getColors(imagePath, {
      fallback: '#000000', // Couleur par défaut en cas d'échec
    });

    switch (result.platform) {
      case 'android':
        return result.dominant; // Couleur dominante sur Android
      case 'ios':
        return result.primary; // Couleur principale sur iOS
      default:
        return '#000000'; // Par défaut
    }
  } catch (error) {
    console.error('Erreur lors de la récupération de la couleur :', error);
    return '#000000'; // Retourne la couleur par défaut en cas d'erreur
  }
};

export default getDominantColor;
