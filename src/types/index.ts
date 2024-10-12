

type Option = {
    value: 'string',
    label: 'string'
}

type RequestFormData = {
    request_name: string,
    date_requested: string,
    time_requested: string,
    request_type: number[],
    contact_no?: string,
    office: number,
    agreed_timeline?: string,
    remarks: string,
    action_taken?: string,
    other_request?: string,
    model?: string,
    equipment_type?: string,
    equipment_sn?: string,
    property_no?: string
}

type PendingRequest = {
    id: number,
    name: string,
    dateRequested: Date,
    office: string,
    remarks: string,
    requestTypes: string[]
}


export type { Option, RequestFormData, PendingRequest }