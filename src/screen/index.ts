import { chain } from '@angular-devkit/schematics';
import { dasherize, classify } from '@angular-devkit/core';
import { ScreenOptions } from './schema';
import { Rule, mergeWith, template, apply, url, move } from '@angular-devkit/schematics';

const stringUtils = { dasherize, classify };

export default function (options: ScreenOptions): Rule {
    options.path = 'screens';
    const templateSource = apply(url('./files'), [
        template({
            ...stringUtils,
            ...options
        }),
        move(options.sourceDir)
    ]);

    return chain([
        mergeWith(templateSource)
    ]);

}
