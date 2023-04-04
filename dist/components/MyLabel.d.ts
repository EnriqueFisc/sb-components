/// <reference types="react" />
import './myLabel.css';
export interface IMyLabelProps {
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
    /**
   * backgroundColor del label POLEORETANO PRETUL ESPUMA ESPANSIVA 750 300 13 180-750
   */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, color, allCaps, fontColor, backgroundColor, }: IMyLabelProps) => JSX.Element;
