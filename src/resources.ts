import { NextFunction, Request, Response } from 'express';
import * as fs from 'fs';
import { Attributes, ErrorMessage } from './metadata';

// tslint:disable-next-line:class-name
export class resources {
  static createValidator?: <T>(attributes: Attributes, allowUndefined?: boolean, max?: number) => Validator<T>;
  static check: (obj: any, attributes: Attributes, allowUndefined?: boolean, patch?: boolean) => ErrorMessage[];
}

export interface Validator<T> {
  validate(obj: T, patch?: boolean): Promise<ErrorMessage[]>;
}

export class TypeChecker {
  constructor(public attributes: Attributes, public allowUndefined?: boolean) {
    this.check = this.check.bind(this);
  }
  check(req: Request, res: Response, next: NextFunction): void {
    const obj = req.body;
    if (!obj || (obj as any) === '') {
      return res.status(400).end('The request body cannot be empty');
    } else {
      const errors = resources.check(obj, this.attributes, this.allowUndefined);
      if (errors.length > 0) {
        res.status(400).json(errors).end();
      } else {
        next();
      }
    }
  }
}
export type Handler = (req: Request, res: Response, next: NextFunction) => void;
export function check(attributes: Attributes, allowUndefined?: boolean): Handler {
  const x = new TypeChecker(attributes, allowUndefined);
  return x.check;
}
export interface Template {
  name?: string | null;
  text: string;
  templates: TemplateNode[];
}
export interface TemplateNode {
  type: string;
  text: string;
  property: string | null;
  encode?: string | null;
  value: string | null;
}
export function loadTemplates(ok: boolean|undefined, buildTemplates: (streams: string[], correct?: (stream: string) => string) => Map<string, Template>, correct?: (stream: string) => string): Map<string, Template>|undefined {
  if (!ok) {
    return undefined;
  }
  const mapper = fs.readFileSync('./src/query.xml', 'utf8');
  return buildTemplates([mapper], correct);
}
