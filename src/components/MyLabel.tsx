import './myLabel.css'

interface IMyLabelProps {
  /**
   * Texto que seerá desplegado en este componente
   */
    label: string;
    /**
     * Tamaño del componente
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Capitalizar todas las letras.
     */
    allCaps?: boolean;
    /**
     * Color de la fuenta
     */
    color?: 'primary' | 'secondary' | 'tertiary';
      /**
     * Color de la fuenta customizable
     */
    fontColor?: string;
}

export const MyLabel = ({ 
  label = 'Modifique el texto', 
  size = 'normal', 
  color = 'primary', 
  allCaps = false, 
  fontColor 
}: IMyLabelProps) => {
  return (
    <span 
      className={`label ${ size } text-${ color }`} 
      style={{
        color: fontColor
      }}
    >
      { allCaps ? label.toUpperCase() : label}
    </span>
  )
}
